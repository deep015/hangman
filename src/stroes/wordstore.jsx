
import {create } from 'zustand';

//create function creates a store for us

const wordStore=create((set)=>({
    wordList:[],
    word:'',
    setWordList:(list)=>{
        set((state)=>{
            console.log("state prinitng:",state)
            //whatever u return from here will be the new state
            return {
                ...state,
                wordList:list
            }
        })
    },
    setWord:(newWord)=>{
        set((state)=>{
            return{
                ...state,
                word:newWord
            }
        })
    }
}))

export default wordStore;