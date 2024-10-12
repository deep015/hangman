import {  useState } from "react"

import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useLocation, useNavigate } from "react-router-dom";
import HangMan from "../components/Hangman/HangMan";


function Game() {
    const location = useLocation();
    const Navigate=useNavigate();
    const word = location.state?.wordSelected || '';// Access the word passed from Home
    
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);
    
    const maxSteps = 7;
    const gameWon = word && word.split('').every(letter => guessedLetters.includes(letter));
    const gameOver = step >= maxSteps;
  
    const handleLetterClick = (letter) => {
      if (word.includes(letter)) {
        setGuessedLetters([...guessedLetters, letter]);
      } else {
        setStep(step + 1);
      }

      
    };
    

    return(
        <div>
            <HangMan step={step}/>
            {gameWon && <h2>Congratulations! you've guessedd the word !</h2>}
            {gameOver && <h2>Game Over! You've run out of attempts.</h2>}

            <LetterButtons 
            text={word}
            gueesedLetters={guessedLetters}
            onLetterClick={handleLetterClick}
            disabled={gameWon || gameOver}
            />
        </div>
    )

}

export default Game;