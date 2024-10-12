/**
 * 
 * @param { The word which is given as input and is expected to be guessed} originalWord 
 * @param { letters which are guest by the users already } guessLetters 
 * 
 * ex:originalword:HUMBLE
 * Guessletters:['H','M','E']
 * 
 * Returns: "H _ M _ E" 
 */


export function getmaskedString(originalWord,guessedLetters){

    console.log("guessedletter:",guessedLetters)
    guessedLetters=guessedLetters.map(letter=>letter.toUpperCase())

    const guessedLetterSet= new Set (guessedLetters);
    const result=originalWord.toUpperCase().split('').map(char=>{
        if(guessedLetterSet.has(char)){
            return char;
        } else {
            return "_"
        }
    }) //

    return result;

}