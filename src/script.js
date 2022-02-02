const textArea = document.getElementById('text-area');
const charactersValue = document.getElementById('characters-value');
const wordsValue = document.getElementById('words-value');
const sentencesValue = document.getElementById('sentences-value');

let numOfWords = 0,
    numOfCharacters = 0,
    numOfSentences = 0;

textArea.addEventListener('keyup', () => {
    let textAreaString = textArea.value.split('str');

    numOfWords = textArea.value.trim().split(/\s+/).length;

    numOfCharacters = textArea.value.length;

    numOfSentences = textArea.value.split('. ').length;

    const defaultValues = numOfCharacters === 0 ? (numOfWords = 0) : 0;

    wordsValue.innerHTML = numOfWords;
    charactersValue.innerHTML = numOfCharacters;
    sentencesValue.innerHTML = numOfSentences;
});
