
var alarmName = "Queues";
var date = new Date();
var minutes = date.getMinutes();
//var diff = (60 - minutes) * 60000;
var timeStamp = Date.now() //+ diff;
chrome.alarms.create(alarmName, {when: timeStamp, periodInMinutes: 2});