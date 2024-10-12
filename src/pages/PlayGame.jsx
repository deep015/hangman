import { Link } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useEffect, useState } from "react";
import HangMan from "../components/Hangman/HangMan";

import wordStore from "../stroes/wordstore";

function PlayGame(){



   const{ wordList,word } =wordStore()

  const [gueesedLetters,setguessedLetters]=useState([]);
  const[step,setStep]=useState(0)
  const [gameStatus,setGameStatus]=useState("");
  const maxSteps=7;
  

  function handleLetterClick(letter){

    if(word?.toUpperCase().includes(letter)){
        console.log('Correct')
    } else {
        console.log('wrong');
        setStep(step+1)
    }
    setguessedLetters([...gueesedLetters,letter]);

 }

 useEffect(()=>{
    const guessWord=word?.split("").every(letter=>gueesedLetters.includes(letter.toUpperCase()))

    if(guessWord){
        setGameStatus("won");
    } else if (step>=maxSteps){
        setGameStatus("lost")
    }
 },[gueesedLetters,step,word])

    return (
        <>
        <h1>Play Game  </h1>
    
        {word && (
            <>
                <MaskedText text={word} guessedLetters={gueesedLetters}/>
                <div>
                    <LetterButtons 
                    text={word}
                     gueesedLetters={gueesedLetters}
                      onLetterClick={handleLetterClick} 
                      disabled={gameStatus!==""}                   
                       />
                </div>
                <div>
                <HangMan step={step}/>
                </div>
                {gameStatus === "won" &&  <h2 className="text-green-500 text-xl font-bold mt-6">
              🎉 Congratulations! You guessed the word correctly!
            </h2>}
                {gameStatus === "lost" && <h2 className="text-red-500 text-xl font-bold mt-6">
              ❌ Game Over! The correct word was "{word}".
            </h2>}
            </>
        )}

       
      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline">Home</Link>
        <Link to="/start" className="ml-4 text-blue-500 hover:underline">Start Game</Link>
      </div>
        </>
    )
}

export default PlayGame;

