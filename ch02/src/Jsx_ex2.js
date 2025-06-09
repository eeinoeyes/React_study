import logo from './logo.svg'
import './App.css'

function App() {
   const name = '리액트'
   return (
      <>
         <h1>{name}안녕!</h1> {/* 중괄호를 백틱 안의 ${}처럼 사용 가능*/}
         {name === '리액트' ? <h1>리액트입니다</h1> : <h2>아닙니다</h2>}
      </>
   )
}

export default App
