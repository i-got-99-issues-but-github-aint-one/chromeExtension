chrome.browserAction.onClicked.addListener(function (tab) {
	//$("body").append('Test');
	alert("test");

	if ( $(".js-discussion .timeline-comment-wrapper").length ) {

    alert("The number of comments is " + $(".js-discussion .js-comment-container").length);
    $(".js-discussion .js-comment-container").each(function() {
    	if (($(this).find(".js-comment-body").text().replace(/\s/g,'').length) <= 2) {
    		//alert($(this).find(".js-comment-body").text());
    		//alert($(this).find(".js-comment-body").text());
    		$(this).show();
    		$(this).css({"border-color": "#FF0000", "border-style":"solid"});
    		//$(this).hide();
    	}
    })
    	//var text = $('.js-comment-body', el).text();
    	//alert($('.js-comment-body').text());
    //})

	} 
	else {
		alert ("Cant find any comment");
	}

});