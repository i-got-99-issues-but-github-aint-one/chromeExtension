chrome.browserAction.onClicked.addListener(function (tab) {
	//$("body").append('Test');
	alert("test");
	/*chrome.tabs.sendRequest(tab.id, {
		greeting: 'show hidden'
	});
	console.log("sent");*/

    chrome.tabs.executeScript(null,
        {code:"console.log(\"does this work\")"});
	});