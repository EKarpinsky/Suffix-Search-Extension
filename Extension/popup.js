let changeWord = document.getElementById('word');
let button = document.getElementById("button");
let word = ""

chrome.storage.sync.get("searchWord", function (data) {
    word = data.searchWord;
    changeWord.setAttribute("value", word);
});

button.addEventListener("click", updateWord);

function updateWord() {
    chrome.storage.sync.set({searchWord: changeWord.value});
}
