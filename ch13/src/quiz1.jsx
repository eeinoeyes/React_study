import { useState, createContext, useContext } from 'react'
import './App.css'

const themeDefault = {
   color: 'red',
   fontSize: '20px',
}
const contextTheme = createContext(themeDefault)

function App() {
   const theme = useContext(contextTheme)
   return (
      <div style={theme}>
         <p>Hello Context!</p>
      </div>
   )
}

export default App
