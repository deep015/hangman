import getButtonStyling from "./getButtonStyling";


function Button({text,onClickHandler ,styleType="primary",type="button"}){

    console.log(text) // objects;

    return (
        <button
         onClick={onClickHandler}
         type={type}
        className={`px-4 py-2 ${getButtonStyling(styleType)} bg-blue-400 text-white`}
        >
        
        {text}
        </button>
    )
}


export default Button;