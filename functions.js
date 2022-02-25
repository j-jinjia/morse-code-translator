import morseCode from "./morseobject.js"
import { inputMorse,outputMorse} from "./script.js";
export const translateEnglishToMorse = () =>{
    const letterArr = inputMorse.value.split("");
    //const newString = letterArr.replace(/,/g, "")
    //console.log(newString);
    //console.log(Object.values(morseCode));
    //console.log(Object.keys(morseCode)) ;
    let arrayMorse=[];
    
    letterArr.forEach(element => {
        if (element in morseCode);
            //console.log(element);
            const translation = morseCode[element];
            arrayMorse.push(translation);
            //console.log(translation);
            //console.log(arrayMorse);
        });
    const stringMessage = arrayMorse.toString();
    const cleanMessage = stringMessage.replace(/,/g," ");
    outputMorse.innerText = cleanMessage;
};