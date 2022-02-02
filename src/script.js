const textArea = document.getElementById('text-area');
const charactersValue = document.getElementById('characters-value');
const wordsValue = document.getElementById('words-value');

let numOfWords = 0,
    numOfCharacters = 0;

textArea.addEventListener('keyup', () => {
    let textAreaValue = textArea.value.split('str');

    numOfWords = textArea.value.trim().split(/\s+/).length;

    for (let i = 0; i < textAreaValue.length; i++) {
        numOfCharacters = textAreaValue[i].length;
    }

    const defaultValues = numOfCharacters === 0 ? (numOfWords = 0) : 0;

    wordsValue.innerHTML = numOfWords;
    charactersValue.innerHTML = numOfCharacters;
});
