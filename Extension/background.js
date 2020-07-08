'use strict';

chrome.runtime.onInstalled.addListener(function () {

    chrome.storage.sync.set({searchWord: "reddit"});
    chrome.contextMenus.create({
        id: "search",
        title: "Search with Reddit",
        type: 'normal',
        contexts: ['selection']
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    let word = "";
    chrome.storage.sync.get('searchWord', function (data) {
        word = data.searchWord;
        if (info.menuItemId === "search") {
            chrome.tabs.create({url: `http://www.google.com/search?q=${info.selectionText} ${word}`});
        }
    });
});
