const textArea = document.getElementById('text-area');
const wordsValue = document.getElementById('words-value');
const charactersValue = document.getElementById('characters-value');

textArea.addEventListener('keyup', count);

let numOfCharacters = 0;

function count() {
    let textAreaValue = textArea.value.split('str');

    for (let i = 0; i < textAreaValue.length; i++) {
        numOfCharacters = textAreaValue[i].length;
    }

    charactersValue.innerHTML = numOfCharacters;
}
