import { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)
   const handleClick = () => {
      inputRef.current.focus()
   }
   return (
      <div>
         <input type="text" ref={inputRef} />
         {/* 직접적으로 DOM을 건드려야 하는 요소에 ref를 부여*/}
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
