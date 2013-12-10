Chirripo Cuesta de los Arrepentidos - Challenge 1
===============================================

##Suspicious Email Detector

### Description
Create a tool that will automatically parse emails that are delivered to a configured mailbox (the tool must monitor an email account continuously). The idea is that the tool detects if the email matches the evaluation criteria, and if it is a match, then the email will be forwarded to a preconfigured recipient. 

The evaluation criteria for the emails will be a list of words. A matching threshold will also preconfigured (i.e. % of words to match). The list of words, matching percentage, and email account settings (pop/imap/smtp servers, ports, credentials, etc) can be configured in any place, either as a parameter to the tool or as par of some sort of configuration or runtime settings. 

As an example, the police will use the tool to monitor a person's inbox, for words in the following list (drugs, drug, money, transaction, dead, traffic, marihuana, cocaine, kg, lsd). There are 10 words in the list, if the email has a match of 90%, then it will forward that email, if the match percentage is below 90% then it will be ignored.


### Installation
You need to have NodeJS to run the script. You can download it [here](http://nodejs.org/download/)

1. First install the following libraries:
	- `Mail-listener2` https://github.com/chirag04/mail-listener2
	- `Emailjs` https://github.com/eleith/emailjs
2. Change your configuration on the `settings.js` file. This example uses gmail configuration.
```javascript
	var configuration = {

	  target: {
	    username: "target@gmail.com", // the email of the person you want to monitor.
	    password: "password", // the password of the email
	    host: "imap.gmail.com", // imap host
	    port: 993, // imap port
	    secure: true, // use secure connection
	    markSeen: false, // all fetched email will be marked as seen and not fetched next time
	  },

	  sender: {
	    username: "someotheremail@gmail.com", // An email account to send the notification.
	    password: "some password", // The password
	    host: "smtp.gmail.com",
	    SSL: true, // use secure connection
	  },
	  matchingPercentage: 90, // The matching percentage of words from the list
	  recipient: 'recipient@gmail.com', // the email of the person that's going to be notified.
	  monitorWordList: ['drugs', 'drug', 'money', 'transaction', 'dead', 'traffic', 'marihuana', 'cocaine', 'kg', 'lsd'],
	};
```
3. Then just run the command `node mailListener.js`.