import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const value = useSelector((state) => state.value)
   return (
      <div>
         <p>count: {value}</p>
         <button onClick={() => dispatch(up(1))}>증가</button>
         <button onClick={() => dispatch(down(1))}>감소</button>
      </div>
   )
}

export default Counter
