// Arrow Buttons
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

// Translate to Morse Code
const inputText = document.getElementById("text-enter");
let getMorse = document.getElementById("morse-exit")


//Translate to Text
const inputMorse = document.getElementById("morse-enter");
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
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    }

    // Alphabet Code

 const alphabetCode = Object.fromEntries(Object.entries(morseCode).map(([key, value]) => [value, key]));
 console.log(alphabetCode)



 const morseTranslator = (str) => {
    return str.toUpperCase().split("").map(element => {
       return morseCode[element] ? morseCode[element] : element;
    }).join("");
 };

 
 const toEnglishTranslator = (str) => {
   return str.split(" ").map(element => {
      return alphabetCode[element] ? alphabetCode[element] : element;
   }).join("");
};


arrow1.addEventListener("click", () => {
    console.log(inputText.value.toUpperCase())
    console.log(morseTranslator(inputText.value))
    getMorse.innerText = morseTranslator(inputText.value);
})

arrow2.addEventListener("click", () => {
   // console.log(inputMorse.value)
   // // console.log(getText.value)
   getText.innerText = toEnglishTranslator(inputMorse.value)

})

    
// Reset

const resetButton = document.getElementById("resetButton");
let inputFields = document.querySelectorAll(".input-box")

resetButton.addEventListener("click", () => {
   inputFields.forEach(input => input.value = "")
})




