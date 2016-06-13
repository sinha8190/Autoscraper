/* Listen for messages */

window.onload=chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	if (msg.command && (msg.command == "get_DOM")) {

sendResponse(document.getElementsByClassName('temp')[0].innerText);
}
});