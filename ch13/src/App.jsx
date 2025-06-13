import { useState, createContext, useContext } from 'react'
import './App.css'

const themeDefault = {
   color: 'pink',
}
const contextTheme = createContext(themeDefault)

function App() {
   const theme = useContext(contextTheme)
   const [isClicked, setIsClicked] = useState('false')
   const onClick = () => {}

   return (
      <div div>
         <button onClick={onClick}>change color</button>
         <p>color text</p>
      </div>
   )
}

export default App
