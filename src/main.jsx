
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ BrowserRouter } from 'react-router-dom'
import { WordContext } from './components/Context/WordContext.jsx'

createRoot(document.getElementById('root')).render(
  <WordContext.Provider>
  
    <BrowserRouter>
      <App />
    </BrowserRouter> 
   
   </WordContext.Provider>
  
)
 