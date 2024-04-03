const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        return alert(`Time Out Biatch! ${correctWord.toLocaleUpperCase()} was the valid word`);
        initGame(); // calling initGame function so the game restarts
    }, 1000)
}

const initGame = () => {
    initTimer(30); // calling initTimer function with passing 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random word

    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = (Math.random() * (i + 1)); // getting random number
        // shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
        
    }

    wordText.innerText = wordArray.join(""); // passing shuffled word
    hintText.innerText = randomObj.hint; // passing random object hint
    correctWord = randomObj.word.toLocaleLowerCase(); //passing random word correctWord
    innerField.value = ""; // making input field empty
    innerField.setAtribute("maxLength", correctWord.length); // setting input maxLength attr value word length
}
// initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if (!userWord) return alert("Please enter a word check"); // if user didn't enter anything
    if (userWord !== correctWord) return alert(`Oppps! ${userWord} is not a valid word`);
    // if two conditions above fail then show because user is correct
    alert(`Yo Menace Congrats! ${correctWord.toLocaleUpperCase} is a valid word`);
    
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);