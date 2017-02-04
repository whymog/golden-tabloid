console.log("Ready for Achewood.");
//
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(null, {file: "app.js"});
// });
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(tabId, changeInfo, tab);
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.tabs.executeScript(null, {file: "app.js"});
  };
});
