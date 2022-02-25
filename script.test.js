import {describe,it,expect} from "@jest/globals";
import {inputValue} from "./script.js"
describe("Testing translation form english to morse", ()=>{
    it("Should return the hello as morse translation", ()=>{
        const result = "Hello"
        expect(result).toBe("....   .   ._..   ._..   ___");
});
});
import { translateEnglishToMorse } from "./translator.js";
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
    expect(result).toBe("");
  });
  // positive tests for multiple words
  it("walk should translate correctly to morse code", () => {
    const result = translateEnglishToMorse("walk talk");
    expect(result).toBe("");
  });

  // negative tests for edge cases

});

//describe("translates morse code to english", () => {});