// Set up the context menu
chrome.contextMenus.create({
    "id": "searcher001",
    "title": "Search Google Scholar for '%s'",
    "contexts": ["selection"],
    "visible": true
});

chrome.contextMenus.onClicked.addListener(function (item, tab) {
    if (item.menuItemId === "searcher001") {
        if(item.selectionText)
        {
            let url =
            'https://scholar.google.com/scholar?q=' + encodeURIComponent(item.selectionText);
            console.log(encodeURI(item.selectionText));
            // Open a new tab
            chrome.tabs.create(
            { url: url, index: tab.index + 1 });
        }
    }
});
