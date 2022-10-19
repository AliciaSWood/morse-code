import * as module from "./functions.js";
import * as data from "./data.js";

// Test - Function translates Morse Code to English
 describe("toEnglishTranslator", () => {
    it("Checking type error", () => {
        expect(typeof(module.toEnglishTranslator( '-.-.', data.alphabetCode))).toBe("string")
    })
    it("Correct letter retrieved", () => {
        expect(module.toEnglishTranslator( '-.-.', data.alphabetCode,)).toBe("C")
    })
    it("Correct code retrieved (number)", () => {
        expect(module.toEnglishTranslator( '....-', data.alphabetCode,)).toBe("4")
    })
    it("Unknown letter/punctuation used", () => {
        expect(module.toEnglishTranslator("/", data.alphabetCode)).toBe("/")
        // When an unknown punctuation is used, it will just reprint that punctuation
    })
})



// Test - Function translates English to Morse Code
describe("morseCodeTranslator", () => {
    it("Checking type error", () => {
        expect(typeof(module.morseCodeTranslator( 'c', data.morseCode))).toBe("string")
    })
    it("Correct code retrieved (lowercase)", () => {
        expect(module.morseCodeTranslator( 'c', data.morseCode)).toBe("-.-.")
    })
    it("Correct code retrieved (uppercase)", () => {
        expect(module.morseCodeTranslator('C', data.morseCode)).toBe("-.-.")
    })
    it("Correct code retrieved (number)", () => {
        expect(module.morseCodeTranslator('2', data.morseCode)).toBe("..---")
    })
    it("Unknown letter/punctuation used", () => {
        expect(module.morseCodeTranslator("/", data.morseCode)).toBe("/")
        // When an unknown punctuation is used, it will just reprint that punctuation
    })
})
