// Checking page title

//$("body").append('Test');

var hidden = [];
var likes = 0;

if ( $(".js-discussion .timeline-comment-wrapper").length ) {
    $(".js-discussion .js-comment-container").each(function() {
    	if (($(this).find(".js-comment-body").text().replace(/\s/g,'').length) <= 2) {
    		//$(this).css({"border-color": "#FF0000", "border-style":"solid"});
    		hidden.push($(this));
    		$(this).hide();
                likes++;
    	}
    })
}
alert("Ths issue has " + likes + " likes"); 

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
	console.log(msg, sender, sendResponse);
    /* If the received message has the expected format... */
    if (msg.greeting) {
        alert('Received a msg from bg...')
        //sendResponse('hey_bp');
        for (var i = 0; i < hidden.length; i++) {
        	alert("looking at");
    		(hidden[i]).show();
    	//Do something
		}
		//location.reload();
    }
});

chrome.tabs.executeScript(null,
        {code:"console.log(\"does this work\")"});
