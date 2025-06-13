import { useDispatch, useSelector } from 'react-redux'
import { up, down, reset } from './counterSlice'

// 컴포넌트라서 확장자 jsx, 대문자로 시작
function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      return state.counter.value
   })

   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         <button onClick={() => dispatch(reset())}>reset</button>
         <br />
         {count}
      </div>
   )
}

export default Counter
