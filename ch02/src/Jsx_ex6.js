import logo from './logo.svg'
import './App.css'

function App() {
   // CSS 인라인 스타일 적용
   const name = '리액트'
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',
      padding: 16,
   }
   //  return <div style={style}>{name}</div>
   return (
      <div
         style={{
            backgroundColor: 'red',
            color: 'black',
            fontSize: '48px',
            padding: 16,
         }}
      >
         {name}
      </div>
   )
}

export default App
