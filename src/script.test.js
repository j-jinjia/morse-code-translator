import { translateEnglishToMorse } from "./functions.js";
import { translateMorseToEnglish} from "./functions.js"
import { expect, it, describe } from "@jest/globals";

describe("translate words from english to morse", () => {
  // positive test case for a single word
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk");
    expect(result).toBe(".-- .- .-.. -.-");
  });
  //positive case for single uppercase word
  it("WALK (all uppercase) should translate correctly to morse code, by converting it to lowercase before translating", () => {
    const result = translateEnglishToMorse("WALK");
    expect(result).toBe(".-- .- .-.. -.-");
  });

  // positive tests for a single letter
  it("b should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("b");
    expect(result).toBe("-...");
  });
  // positive tests for multiple words
  it("walk talk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk talk");
    expect(result).toBe(".-- .- .-.. -.- / - .- .-.. -.-");
  });

  // negative tests for edge cases
  it("if there is no input, return No characters detected", () => {
    const result = translateEnglishToMorse("");
    expect(result).toBe("No characters detected");
  });
});

describe("translate words from morse to english", () => {
  //positive case for a single word
  it(".... . .-.. .-.. --- should translate correctly to english", () => {
    const result = translateMorseToEnglish(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
  });
  //positive case for multiple words
  it(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. should translate correctly to morse code", () => {
    const result = translateMorseToEnglish(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    expect(result).toBe("hello world");
  });
  //positive case for 1 letter
  it(".- translate correctly to morse code", () => {
    const result = translateMorseToEnglish(".-");
    expect(result).toBe("a");
  });
  //negative tests for edge cases
  it("if there is no input, should return No characters detected", () => {
    const result = translateMorseToEnglish("");
    expect(result).toBe("No characters detected");
  });



});
