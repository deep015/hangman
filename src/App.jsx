

import { Route,Routes } from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import StartGame from './pages/startgame'
import Home from './pages/Home'
import { WordContext } from './components/Context/WordContext'
import { useState } from 'react'

function App() {

  const [wordList,setWordList]=useState([])
  const [word,setWord]=useState('')

  return (
    <WordContext.Provider value={{wordList,setWordList,word,setWord}}>
   
   <Routes>
    <Route path='/start' element={<StartGame/>} />

    <Route path='/play' element={<PlayGame />}/>

  

    <Route path='/' element={<Home/>}/>
   </Routes>
   </WordContext.Provider>

  )
}

export default App
