/* Listen for messages */

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
if (msg.text && (msg.text == "click_search")) {
sendResponse(document.getElementsByClassName('bt bt-go')[0].click())
}
});