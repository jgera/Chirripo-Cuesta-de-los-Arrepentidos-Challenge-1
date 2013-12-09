Chirripo Cuesta de los Arrepentidos - Challenge 1
===============================================

Suspicious Email Detector
Create a tool that will automatically parse emails that are delivered to a configured mailbox (the tool must monitor an email account continuously). The idea is that the tool detects if the email matches the evaluation criteria, and if it is a match, then the email will be forwarded to a preconfigured recipient. The evaluation criteria for the emails will be a list of words. A matching threshold will also preconfigured (i.e. % of words to match). The list of words, matching percentage, and email account settings (pop/imap/smtp servers, ports, credentials, etc) can be configured in any place, either as a parameter to the tool or as par of some sort of configuration or runtime settings. As an example, the police will use the tool to monitor a person's inbox, for words in the following list (drugs, drug, money, transaction, dead, traffic, marihuana, cocaine, kg, lsd). There are 10 words in the list, if the email has a match of 90%, then it will forward that email, if the match percentage is below 90% then it will be ignored.

Requires the installition of the following libraries:
Mail-listener2 https://github.com/chirag04/mail-listener2
Emailjs https://github.com/eleith/emailjs