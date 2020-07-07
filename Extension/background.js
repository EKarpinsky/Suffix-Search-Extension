'use strict';

chrome.runtime.onInstalled.addListener(function () {
    const createProperties = {
        url: "http://www.google.com/search?q=test"
    }
    chrome.contextMenus.create({
        id: "search",
        title: "Search with Reddit",
        type: 'normal',
        contexts: ['selection'],
        // onclick: info => {
        //
        //     console.log("test");
        //     createProperties.url = `http://www.google.com/search?q=${info} reddit`
        //     // chrome.tabs.create(createProperties);
        //
        // }

    });
});

chrome.contextMenus.onClicked.addListener(function (info) {
    if (info.menuItemId === "search") {
        const createProperties = {
            url: "http://www.google.com/search?q=test"
        }
        console.log(info,"test");
        createProperties.url = `http://www.google.com/search?q=${info.selectionText} reddit`
        chrome.tabs.create(createProperties);
    }
});
