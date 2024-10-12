import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
   
    return( <TextInputForm 
            inputType="text"
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
            />
        );
}

export default TextInputFormContainer;