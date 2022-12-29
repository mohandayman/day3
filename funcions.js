const convertToPascal = inputText => {

    // let text = new String(inputText);
    let retval = ""; // inntialize a return value 
    retval += inputText[0].toUpperCase(); // to capitlize the first charecter 
    for (let i = 1; i < inputText.length; i++) { // trace all charecters except the first one 
        if (inputText[i - 1] == " ") { // if new word 
            retval += inputText[i].toUpperCase(); // capitlize the elemnt after the space 
        } else {
            retval += inputText[i]; // assign anothe chars
        }
    }
    return retval;

}


let longestWord = function longestInSentence(sentence) {
    let senteceWords = sentence.split(" "); // split new words in array
    let retval = senteceWords[0]; // initial value first element
    for (let i = 1; i < senteceWords.length; i++) { // loop all words 
        if (senteceWords[i].length > retval.length) { // if the word is larger
            retval = senteceWords[i];
        }
    }
    return retval;
}

let arrangeTheword = (word) => {
    let retval = "";
    word = word.split("");
    word = word.sort();
    for (let i = 0; i < word.length; i++) {
        retval += word[i];
    }
    return retval;
}


let randomNumbers = range => {
    let returnNumbers = [];
    for (let i = 0; i < range; i++) {
        returnNumbers[i] = Math.round(Math.random() * 10);
    }
    return returnNumbers;
}

let month = function getMonth(){
    let date = new Date;
let yearMonths = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September", "October", "November" , "December"];
 return yearMonths[date.getMonth()];
}

