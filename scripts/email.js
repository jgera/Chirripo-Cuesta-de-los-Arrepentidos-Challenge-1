var email = require("./node_modules/emailjs/email"),
	settings = require("./settings");

var server = email.server.connect({
	user: settings.configuration.sender.username,
	password: settings.configuration.sender.password,
	host: settings.configuration.sender.host,
	ssl: settings.configuration.sender.SSL
});

function forwardSuspiciousEmail(from, subject, text) {
	// send the message and get a callback with an error or details of the message that was sent
	var emailText = "There's a suspicious email on the account you are monitoring." +
		"From: {0}\r\n" +
		"Subject: {1}\r\n" +
		"Message: {2}\r\n";

	emailText = emailText.replace('{0}', from);
	emailText = emailText.replace('{1}', subject);
	emailText = emailText.replace('{2}', text);

	server.send({
		text: emailText,
		from: settings.configuration.sender.username,
		to: settings.configuration.recipient,
		subject: "Suspicious email [" + settings.configuration.target.username + "]",
		attachment: [{
				data: "<html>There's a suspicious email on the account you are monitoring.<br />" +
					"<br /><strong>From: </strong> " + from +
					"<br /><strong>Subject: </strong> " + subject +
					"<br /><strong>Message: </strong> " + text +
					"</html>",
				alternative: true
			},

		]
	}, function(err, message) {
		console.log(err || message);
	});

}


exports.forwardSuspiciousEmail = forwardSuspiciousEmail;