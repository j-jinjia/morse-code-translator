import { translateEnglishToMorse } from "./functions.js";
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
//Calls the translate function in function.js with the value of input text
const handleTranslationMorse =() => {
  const result = translateEnglishToMorse(handleInput());
  morseTranslateResult.innerText = result;
}

//Clears input field and output result
const handleClear =()=>{
  englishInput.value="";
  morseTranslateResult.innerText="Output translation"
}


//EVENT LISTENERS
englishInput.addEventListener("input", handleInput);
translateMorseButton.addEventListener("click", handleTranslationMorse);
clearButton.addEventListener("click", handleClear);


/**  Morse code pseudo code
 *  1.- user input in input field
 *  2.- Event listeners on input field 
 *  3.- Store the translation in an object for each letter. So const translation {A: bla, b: bla......}
 *      3.5.- Calling each object with forEach loop.
 *  4.- If letter x in input bar, return the value of x. 
 *  5.- Display on output translation screen. 
 * 
 * NOTES: Code works if everything is in the same file. Need to be separated.
 * Can't export as default more than 1 {solved}
 * add stylings
 * Code depends on DOM elements, need to make translateEnglishToMorse independent.
*/
