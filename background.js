console.log("Ready for Achewood.");
//
chrome.browserAction.onClicked.addListener(function(tab) {
  window.alert("An Achewood companion.\n\nArrow keys: previous/next comic\nA: view alt text");
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(tabId, changeInfo, tab);
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.tabs.executeScript(null, {file: "app.js"});
  };
});
