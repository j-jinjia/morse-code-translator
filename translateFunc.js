export const translateEnglishToMorse = (word,morseArray) =>{
    let arrayMorse=[];
    letterArr(word)
    //const newString = letterArr.replace(/,/g, "")
    //console.log(newString);
    //console.log(Object.values(morseCode));
    //console.log(Object.keys(morseCode)) ;
    word.forEach(element => {
        if (element in morseArray);
            //console.log(element);
            const translation = morseArray[element];
            arrayMorse.push(translation);
            //console.log(translation);
            //console.log(arrayMorse);
        });
        return arrayMorse;
};