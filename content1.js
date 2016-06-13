/* Listen for messages */

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
if (msg.title && (msg.text == "paste_query")) {
	var dst = msg.title;
	window.document.getElementById('s').value = dst;
	sendResponse(dst);
}
});