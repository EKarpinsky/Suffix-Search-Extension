'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        id: "search",
        title: "Search with Reddit",
        type: 'normal',
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === "search") {
        chrome.tabs.create({url: `http://www.google.com/search?q=${info.selectionText} reddit`});
    }
});
