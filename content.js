/*****
Author: 		Dillon Murray
Class: 			CSCE 3420
Assignment: 	Final Project
*****/
// http://pixabay.com/en/microphone-mic-sound-audio-stage-312421/
// http://i.imgur.com/6rjsMZN.png 

$(document).ready(function() {
	var buttonImg = chrome.extension.getURL('microphone.png');
	if( window.location.href.indexOf("4chan") > -1) {
		$( ".postInfo" ).after( '<span><img class="ttsButton" src="http://i.imgur.com/6rjsMZN.png" /></span>' );
		$( ".navLinks.desktop" ).append( ' [<a class="downAll">Get Images</a>]' );
	} else if( window.location.href.indexOf("youtube") > -1 ) {
		$( ".wO" ).after( '<div><img class="ttsButton" src="http://i.imgur.com/6rjsMZN.png" /></div>' );
	};
});


$(document).on('click', ".ttsButton", function() {
	var textNode = $( this ).parent().parent().children("blockquote");
	var message = textNode.clone().children("br").replaceWith("\n").end();
	message = message.children().remove("a").end().text();
	chrome.runtime.sendMessage({text: message}, function() {});
});

$(document).on('click', ".downAll", function() {
	var URLs = [];
	$( ".fileThumb" ).each(function() {
		console.log($( this ).attr("href").replace(/\/\//, "http://"));
		URLs.push($( this ).attr("href").replace(/\/\//, "http://"));
	});
	chrome.runtime.sendMessage({text: URLs}, function() {});
});



