/*****
Author: 		Dillon Murray
Class: 			CSCE 3420
Assignment: 	Final Project
*****/

chrome.runtime.onMessage.addListener(function(request) {
  var message = request.text;
  if( message.constructor === Array ){
	  for( var i = 0; i < message.length; i++ ){
		console.log(message[i]);
		chrome.downloads.download({"url": message[i]}, function(id){});
	}
  } else {
	  message = message.replace(/>/g, "implying ");

	  var messages = message.split("\n");
	  var mesCount = messages.length;

	  if( mesCount > 1 ){
		for( var i = 0; i < mesCount; i++ ) {
			if( messages[i].valueOf() != "" ) {
				chrome.tts.speak(messages[i], {'enqueue': true, 'rate': 0.9});
			}
		}
	  } else {
			chrome.tts.speak(message, {'rate': 0.9});
		}
  }
  });

