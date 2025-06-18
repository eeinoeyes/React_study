import { useDispatch, useSelector } from 'react-redux'
import { multiply, reset } from './multipleSlice'
function Multiple() {
   const dispatch = useDispatch()
   const number = useSelector((state) => state.multiple.value)
   return (
      <div>
         <p>{number}</p>
         <button onClick={() => dispatch(multiply(2))}>2배</button>
         <button onClick={() => dispatch(multiply(3))}>3배</button>
         <button onClick={() => dispatch(multiply(10))}>10배</button>
         <button onClick={() => dispatch(reset())}>초기화</button>
      </div>
   )
}

export default Multiple
