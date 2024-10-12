/*
const ALPHABETS="QWERTYUIOPASDFGHJKLZXCVBNM".split('')
function LetterButtons({ text,gueesedLetters,onLetterClick }){

    const originalLetters= new Set(text.toUpperCase().split(''));
    const gueesedLettersSet= new Set(gueesedLetters);

    const buttonStyle = function(letter) {
        if(gueesedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }
    function handleLetterClick(event){
        const characterOfTheLetter=event.target.value;
        onLetterClick ?.(characterOfTheLetter);
    }

    const buttons=ALPHABETS.map(letter =>{
        return (
            <button key={`button-${letter}`}
            value={letter}
            onClick={handleLetterClick}
            disabled={gueesedLettersSet.has(letter)}
            className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
            >
                {letter}

            </button>
        )
    })
    return (
        <>
            { buttons }
        </>
    )

}

export default <LetterButtons></LetterButtons>*/

function LetterButtons({ text, gueesedLetters, onLetterClick, disabled }) {
    const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
    const originalLetters = new Set(text.toUpperCase().split(''));
    const gueesedLettersSet = new Set(gueesedLetters);
  
    const buttonStyle = (letter) => {
      if (gueesedLettersSet.has(letter)) {
        return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
      } else {
        return 'bg-blue-500';
      }
    };
  
    const handleLetterClick = (event) => {
      const characterOfTheLetter = event.target.value;
      onLetterClick && onLetterClick(characterOfTheLetter);
    };
  
    const buttons = ALPHABETS.map(letter => (
      <button key={`button-${letter}`}
        value={letter}
        onClick={handleLetterClick}
        disabled={disabled || gueesedLettersSet.has(letter)} // Add 'disabled' logic
        className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}>
        {letter}
      </button>
    ));
  
    return <>{buttons}</>;
  }
  
  export default LetterButtons;
  