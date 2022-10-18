import * as data from "./modules/data.js";
import * as module from "./modules/functions.js";

// Variables
// Arrow Buttons
const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");

//Translate to Text
const inputMorse = document.getElementById("morse-enter");
const getText = document.getElementById("text-exit");

// Translate to Morse Code
const inputText = document.getElementById("text-enter");
let getMorse = document.getElementById("morse-exit")


// Event Listeners
// To translate to Morse
inputText.addEventListener("input", () => {
   getMorse.innerText = module.morseCodeTranslator(inputText.value, data.morseCode);
})

// To translate to text
arrow2.addEventListener("click", () => {
   getText.innerText = module.toEnglishTranslator(inputMorse.value, data.alphabetCode)

})

// Reset Button
//Variables
const resetButton = document.getElementById("resetButton");
let inputFields = document.querySelectorAll(".input-box")
let ouputFields = document.querySelectorAll(".out-box")

resetButton.addEventListener("click", () => {
   module.resetFields(inputFields, ouputFields)
})
