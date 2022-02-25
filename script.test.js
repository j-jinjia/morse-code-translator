import { translateEnglishToMorse } from "./functions.js";
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
  // positive test case for a single word
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk");
    expect(result).toBe(".-- .- .-.. -.-");
  });

  // positive tests for a single letter
  it("b should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("b");
    expect(result).toBe("-...");
  });
  // positive tests for multiple words
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk talk");
    expect(result).toBe(".-- .- .-.. -.- - .- .-.. -.-");
  });

  // negative tests for edge cases
  it("+ sign should not translate and return invalid text", () =>{
      const result = translateEnglishToMorse("+");
      expect(result).toBe("invalid");
  });
});

//describe("translates morse code to english", () => {});