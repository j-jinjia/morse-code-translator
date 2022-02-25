import morseCode from "./morseobject.js"
import {translateEnglishToMorse} from "./translateFunc.js";
import { inputMorse,outputMorse} from "./script.js";
const letterArr =() =>{
    const wordArray = inputMorse.value.split("");
    return wordArray
}
const stringMessage = arrayMorse.toString();
const cleanMessage = stringMessage.replace(/,/g," ");
outputMorse.innerText = cleanMessage;