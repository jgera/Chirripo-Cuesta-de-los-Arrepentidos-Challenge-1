var MailListener = require("mail-listener2"),
    parser       = require('./parser'),
    settings     = require('./settings');

var mailListener = new MailListener({
  username: settings.configuration.username,
  password: settings.configuration.password,
  host: settings.configuration.host,
  port: settings.configuration.port, 
  tls: settings.configuration.secure,
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  markSeen: settings.configuration.markSeen, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true // use it only if you want to get all unread email on lib start. Default is `false`,
  //mailParserOptions: {streamAttachments: true} // options to be passed to mailParser lib.
});

mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function(){
  console.log("imap service: Connected");
});

mailListener.on("server:disconnected", function(){
  console.log("imap service: Disconnected");
});

mailListener.on("error", function(err){
  console.log(err);
});

mailListener.on("mail", function(mail){
  // do something with mail object including attachments
  var subject =  mail.subject;
  var text    = mail.text;
  var from    = mail.from[0].address;


  parser.validateMail(from, subject, text);
  
});

