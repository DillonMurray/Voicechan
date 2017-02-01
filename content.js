/*****
Author: 		Dillon Murray
Class: 			CSCE 3420
Assignment: 	Final Project
*****/
// http://pixabay.com/en/microphone-mic-sound-audio-stage-312421/
// http://i.imgur.com/6rjsMZN.png 

$(document).ready(function() {
	var buttonImg = chrome.extension.getURL('microphone.png'),
	chanImageHtml = '<span><img class="ttsButton" src="http://i.imgur.com/6rjsMZN.png" /></span>',
	youtubeImageHtml = '<div><img class="ttsButton" src="http://i.imgur.com/6rjsMZN.png" /></div>';
	
	if (window.location.href.indexOf("4chan") > -1) {
		$(".postInfo").after(chanImageHtml);
		$(".navLinks.desktop").append(' [<a class="downAll">Get Images</a>]');
	} else if (window.location.href.indexOf("youtube") > -1) {
		$(".wO").after(youtubeImageHtml);
	};
});


$(document).on('click', ".ttsButton", function() {
	var me = this,
	textNode = $(me).parent().parent().children("blockquote"),
	message = textNode.clone().children("br").replaceWith("\n").end(),
	cleanedMessage = message.children().remove("a").end().text();
	
	chrome.runtime.sendMessage({text: cleanedMessage}, function() {});
});

$(document).on('click', ".downAll", function() {
	var URLs = [];
	$(".fileThumb").each(function() {
		console.log($( this ).attr("href").replace(/\/\//, "http://"));
		URLs.push($( this ).attr("href").replace(/\/\//, "http://"));
	});
	chrome.runtime.sendMessage({text: URLs}, function() {});
});



