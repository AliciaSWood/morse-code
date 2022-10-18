export const toEnglishTranslator = (str, code) => {
    return str.split(" ").map(element => {
       return code[element] ? code[element] : element;
    }).join("");
 };

 export const morseCodeTranslator = (str, code) => {
    return str.toUpperCase().split("").map(element => {
       return code[element] ? code[element] : element;
    }).join("");
 }

 export const resetFields = (input, output) => {
    input.forEach(input => input.value = "")
    output.forEach(input => input.innerText = "")
 }