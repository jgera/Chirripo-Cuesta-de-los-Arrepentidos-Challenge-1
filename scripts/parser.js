var settings = require('./settings'),
	emailjs  = require('./email');

function validateMail(from, subject, text){
	
	if(subject != undefined && text != undefined && from != undefined){
		var percentageMatchingWords = parseMail(subject, text);
		if(percentageMatchingWords > settings.configuration.matchingPercentage){
			console.log("Alert!! Suspicious has been detected!!");
			console.log("Matching percentage :" + percentageMatchingWords + "%");
			console.log("Forwading email.");
			emailjs.forwardSuspiciousEmail(from, subject, text);
		}
		//words matching percentage is below the preconfigured % of words to match. 
		else{
			console.log("Ignoring email cause matching percentage of words(" + percentageMatchingWords + "%) in email is below preconfigured(" + settings.configuration.matchingPercentage + "%).");
		}
	}
	//ignore mail and wait other emails
	else {
		console.log("Ignoring email cause has invalid or null data (from, subject, body).");
	}
}

function parseMail(subject, text){
	
	console.log("Parsing email.");
	var wordsQuantity = countWords(text);
	wordsQuantity += countWords(subject);
	var totalMatches = 0;
	settings.configuration.monitorWordList.forEach(function(word){
		totalMatches += getMatchQuantity(word,text);
		totalMatches += getMatchQuantity(word,subject);
	});

	var percentage = (totalMatches / wordsQuantity) *100;
	return percentage;	
}

function getMatchQuantity(word, text){
	
	var reg = new RegExp(word,'gi');
	var matches = text.match(reg);
	return matches ? matches.length : 0 ;
}


function countWords(text){
	s = text;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n/g, " ");	
	return s.split(' ').length;
}


exports.validateMail = validateMail;