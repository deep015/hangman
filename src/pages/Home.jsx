import { Link } from "react-router-dom"
import Button from "../components/button/Button"
import {  useEffect } from "react"
import wordStore from "../stroes/wordstore";
import TextInputForm from "../components/button/TextInputForm/TextInputForm";

function Home(){
 
  
  
  const {setWordList , setWord}= wordStore();//coming from the store
   
  async function fetchWords() {
        const response=await fetch('http://localhost:3000/words');
        const data=await response.json();
        console.log(data);

        setWordList([...data])

        const randomIndex=Math.floor(Math.random()*data.length);
        console.log(data[randomIndex]);

        setWord(data[randomIndex].wordValue);
    }
   

      useEffect(()=>{
            fetchWords();
        },[])

      return(
        <>
         <Link to='/play' >
        <Button text="Single Player Game" /> 
        
        </Link>
 
         <br />
         <Link to="/start">
            <div className="mt-4">
            <Button text="multiplayer Player Game" styleType="secondary"/>
            </div>
         </Link>
        </>
      )
}

export default Home