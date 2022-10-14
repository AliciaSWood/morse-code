// Arrow Buttons
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

// Translate to Morse Code
const inputText = document.getElementById("text-enter");
let getMorse = document.getElementById("morse-exit")
let textArray = [inputText.value.toUpperCase()];
let textRecieved = inputText.value;



//Translate to Text
const inputMorse = document.getElementById("morse-enter").value;
const getText = document.getElementById("text-exit");

// Morse Code
const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
 }


 const morseTranslator = (str) => {
    return str.toUpperCase().split("").map(el => {
       return morseCode[el] ? morseCode[el] : el;
    }).join("");
 };


arrow1.addEventListener("click", () => {
    console.log(inputText.value.toUpperCase())
    console.log(morseTranslator(inputText.value))
    getMorse.innerText = morseTranslator(inputText.value);
})

    



