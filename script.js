import { translateEnglishToMorse } from "./src/functions.js";
import { translateMorseToEnglish } from "./src/functions.js";
//DOM
const englishInput = document.querySelector("#english-word");
const morseTranslateResult = document.querySelector("#morse-translate-result");
const translateMorseButton = document.querySelector("#translate-morse-button");
const clearButton = document.querySelector("#clear-button");

//FUNCTIONS
// Gets the value of input text
const handleInput = () => {
  const inputValue = englishInput.value;
  return inputValue
};
//Calls the translate function in function.js with the value of input text and returns the english equivalent
const handleTranslationMorse =() => {
  const result = translateEnglishToMorse(handleInput());
  morseTranslateResult.innerText = result;
}
//calls the translate to english function from functions.js with the value of input text and returns the morse equivalent.
const translateEnglishButton = document.querySelector("#translate-english-button");
const handletranslationEnglish =()=>{
  const result = translateMorseToEnglish(handleInput());
  console.log(result)
  morseTranslateResult.innerText = result;
} 
//Clears input field and output result
const handleClear =()=>{
  englishInput.value="";
  morseTranslateResult.innerText="Output translation"
  englishInput.focus()
}


//EVENT LISTENERS
englishInput.addEventListener("input", handleInput);
translateMorseButton.addEventListener("click", handleTranslationMorse);
clearButton.addEventListener("click", handleClear);
translateEnglishButton.addEventListener("click",handletranslationEnglish)

