import {morseCode} from "./objects/morseobject.js"
import {morseTranslate} from "./objects/englishtomorse.js"

export const translateEnglishToMorse = (englishWord) => {
  if (typeof englishWord !== "string") {
    return "invalid input";
  }
  if (englishWord=="") return "No characters detected"
  const lowerCaseWord = englishWord.toLowerCase();
  const morseArray = lowerCaseWord.split("").map((character) => {
    return morseCode[character];
  });
  return morseArray.join(" ");
};

export const translateMorseToEnglish = (morseWord) =>{
  if(morseWord=="") return "No characters detected";
  const englishArray = morseWord.split(" ").map((character) => {
    return morseTranslate[character];
  });
  return englishArray.join("");
};