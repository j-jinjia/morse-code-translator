import { translateEnglishToMorse } from "./functions.js";
/**  Morse code pseudo code
 *  1.- user input in input field
 *  2.- Event listeners on input field for each letter
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

//global variables 
//DOM
const inputMorse = document.querySelector(".input");
const outputMorse = document.querySelector(".output");
const translateButton = document.querySelector(".translate")

//eventlisteners
translateButton.addEventListener("click",translateEnglishToMorse);


export {inputMorse, outputMorse}
