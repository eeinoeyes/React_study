import { useReducer } from 'react'
import { useState } from 'react'

function ReducerCounter1() {
   const [count, countDispatch] = useReducer(countReducer, 0)
   // 구조 [state, dispatch로 사용할 함수 이름] = useReducer()

   //reducer 함수: 직접 state를 변경한다
   function countReducer(oldCount, action) {
      switch (action) {
         case 'UP':
            return oldCount + 1
         case 'DOWN':
            return oldCount - 1
         case 'RESET':
            return 0
      } //if문으로 써도 되는데 코드 길어지면 이게 더 편할 듯...
   }
   const down = () => countDispatch('DOWN')
   const up = () => countDispatch('UP')
   const reset = () => countDispatch('RESET')

   return (
      <>
         <input type="button" value={'-'} onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value={'+'} onClick={up} />
         <br />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter1
