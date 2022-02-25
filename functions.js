import morseCode from "./morseobject.js"
//functions
// sperates each letter of the input word. 
export const translateEnglishToMorse = (text) =>{
    const letterArr = text.split("");
    //const newString = letterArr.replace(/,/g, "")
    //console.log(newString);
    //console.log(Object.values(morseCode));
    //console.log(Object.keys(morseCode)) ;
    letterArr.forEach(element => {
        if (element in morseCode);
            console.log(morseCode[element])
            console.log(element)
    });

};