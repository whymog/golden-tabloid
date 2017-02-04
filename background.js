chrome.browserAction.onClicked.addListener(function(tab) {
  window.alert(
    `An Achewood companion.

    - Left Arrow / J: previous comic
    - Right Arrow / K: next comic
    - A: view alt text`
  );
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log(tabId, changeInfo, tab);
  if (changeInfo.status === 'complete' && tab.active) {
    chrome.tabs.executeScript(null, {file: "app.js"});
  };
});
