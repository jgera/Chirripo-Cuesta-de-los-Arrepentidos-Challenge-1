var email    = require("./node_modules/emailjs/email"),
	settings = require("./settings");

var server  = email.server.connect({
   user:    settings.configuration.senderUsername,
   password:settings.configuration.senderPassword,
   host:    settings.configuration.senderHost,
   ssl:     settings.configuration.senderSSL
});

function forwardSuspiciousEmail(from, subject, text){
	// send the message and get a callback with an error or details of the message that was sent
	server.send({
	   text:    text,
	   from:    from,
	   to:      settings.configuration.recipient,
	   subject: subject
	}, function(err, message) { console.log(err || message); });

}


exports.forwardSuspiciousEmail = forwardSuspiciousEmail;