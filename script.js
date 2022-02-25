import morseCode from "./morseobject.js"
//import {translateEnglishToMorse} from "./functions.js"
/**  Morse code pseudo code
 *  1.- user input in input field
 *  2.- Event listeners on input field for each letter
 *  3.- Store the translation in an object for each letter. So const translation {A: bla, b: bla......}
 *      3.5.- Calling each object with forEach loop.
 *  4.- If letter x in input bar, return the value of x. 
 *  5.- Display on output translation screen. 
*/

//global variables 
//DOM
const inputMorse = document.querySelector(".input");
const outputMorse = document.querySelector(".output");
const translateButton = document.querySelector(".translate")


//functions
// sperates each letter of the input word. 
export const translateEnglishToMorse = () =>{
    const letterArr = inputMorse.value.split("");
    //const newString = letterArr.replace(/,/g, "")
    //console.log(newString);
    //console.log(Object.values(morseCode));
    //console.log(Object.keys(morseCode)) ;
    let arrayMorse=[];
    
    letterArr.forEach(element => {
        if (element in morseCode);
            console.log(element);
            const translation = morseCode[element];
            arrayMorse.push(translation);
            //console.log(translation);
            //console.log(arrayMorse);
        });
    const stringMessage = arrayMorse.toString();
    const cleanMessage = stringMessage.replace(/,/g," ");
    console.log(outputMorse.innerText = cleanMessage);
};
//eventlisteners

translateButton.addEventListener("click",translateEnglishToMorse);
