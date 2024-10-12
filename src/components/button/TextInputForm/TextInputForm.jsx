
import { useState } from "react";
import TextInput from "../../../textInput/textinput";
import Button from "../Button";
import { useNavigate } from "react-router-dom";


function TextInputForm(){

  // let inputType="password";

   const [inputType,setInputType]= useState("password");
   const [value,setvalue]=useState("")

   const navigate=useNavigate(); //useNavigate is a hook that returns a navigate a function

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("form submitted !",value);
        if(value){
            //if we have somethings in value then we went to go to the play page
            navigate(`/play`,{state:{wordSelected:value}})
        }

    } 

    function handleTextInputChange(event){
        console.log("text input");
        console.log(event.target.value);
        setvalue(event.target.value);
    }


    function handleShowHideClick(){
        console.log("show/hide button clicked");
        if(inputType=="password"){
            setInputType("text")
        } else {
            setInputType("password")
        }
        console.log(inputType);


    }

       
   
    return(

        
        <form onSubmit={handleFormSubmit}>
            <div>
               
            <TextInput 
             type={inputType}
             label="Enter a word or a pharse"
             placeholder="enter a word or pharse here.."
             onChangeHandler={handleTextInputChange}/>
         </div>

         <div>
           <Button 
           styleType="error"
           text={inputType=="password" ? "show" : "hide"}
           onClickHandler={handleShowHideClick}
           type="button"
           />
           
         </div>
         <div>
             <Button
             type="submit"
             styleType="primary"
             text="submit" 
             />
                
            </div>

        </form>
    );
}

export default TextInputForm;