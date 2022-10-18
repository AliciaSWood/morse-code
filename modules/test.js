
// Test - Function translates Morse Code to English
 describe("toEnglishTranslator", () => {
    it("Checking type error", () => {
        expect(typeof(toEnglishTranslator).toBe("string"))
    })
    it("Correct letter retrieved", () => {
        expect('-.-.', toEnglishTranslator).toBe("C")
    })
})

// Test - Function translates English to Morse Code
describe("morseCodeTranslator", () => {
    it("Checking type error", () => {
        expect(typeof(codeTranslator).toBe("string"))
    })
    it("Correct code retrieved", () => {
        expect('c', morseCodeTranslator).toBe("-.-.")
    })
})

describe("resetFields", () => {
    it("Checking output is an empty string", () => {
        expect("hello", "goodbye").toBe("")
    })
}
)
