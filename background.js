/**
 * background.js
 * For scraping count of SOs from gCases for a Adwords CC (Uk) queues.
 */
var tabId = "";
var id3 = "";
var url = '';
var pattern = 'http://www.accuweather.com/*';
var data1;
var query;
var theTab;
var count = 0;

chrome.alarms.onAlarm.addListener(function(alarm) {
var count = 0;
//Find the tab matching gCases
		function doInCurrentTab(tabCallback) {
			chrome.tabs.query({ 'url': pattern }, function (tabArray) { tabCallback(tabArray[0]); });
		}
		
		var activeTabId;
		doInCurrentTab( function(tab){ activeTabId = tab.id } );

//Get the count of cases from gCases and send the information to spreadsheet
		function doStuffWithDOM3(domContent) {
		var d = new Date();
		var curr_hour = d.getHours();
		var curr_min = d.getMinutes();
		var time2 = curr_hour + ':' + curr_min;
		var y = new XMLHttpRequest();
		y.open('POST', url, true);
		y.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		y.send("time2="+time2+"&data2="+domContent);		
		}
		
//Read the query and write output for given queries in given rows
		function getSearch() {	
			count +=1;
			
			if (count >= 3) {
				clearInterval(runs);
				return;
			}
				
			switch(count) {
				case 1: 
					url = 'https://script.google.com/a/macros/google.com/s/AKfycbzQBDQzpswNKKGGlEO2B_gxut2HEVmvLrn-4EEd1QUaX0wL3gM/exec';
					break;			
				case 2: 
					url = 'https://script.google.com/a/macros/google.com/s/AKfycbyQtLaz8nKLX64j2PclpE80jcI5ywTMcCNMGCP61sO_EcrlfFOX/exec';
					break;
			}

//Read the query from spreadsheet, paste it in the search tab in gCases and then click Search			
			function getQuery() {
					chrome.tabs.sendMessage(activeTabId, { text: "paste_query", title: query }, function() {} );
		
					chrome.tabs.sendMessage(activeTabId, { text: "click_search" }, function () {} );
			}
			
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				query = JSON.parse(xhr.responseText);
				setTimeout(getQuery, 2000)
				}
			}	
			
			xhr.open('GET', url, true);
			xhr.send();
				
//Get the count of cases from gCases			
			function chkCnt() {
				if (query === "") {
					count = 3;
					return;
				}
				chrome.tabs.sendMessage(activeTabId, { command: "get_DOM" }, doStuffWithDOM3 )
			}
			
			setTimeout(chkCnt, 8000);
		}
		var runs = setInterval(getSearch, 10000);
});