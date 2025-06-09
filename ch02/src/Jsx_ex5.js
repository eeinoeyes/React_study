import logo from './logo.svg'
import './App.css'

function App() {
   const type = 'radio'
   const str = 'string' //문자열은 true
   const number = 0 //0은 false
   return (
      <>
         <input type="text" value="리액트" disabled={true}></input>
         <br />
         <input type="text" value="자바스크립트" disabled={str && number}></input>
         {/* disabled = false와 같은 결과 */}
         <br />
         <input type={type} checked={true}></input>선택1
         <br />
         <input type={type} checked={str || number}></input>선택2
         {/* str값이 true이므로 checked = true와 같은 결과 */}
      </>
   )
}

export default App
