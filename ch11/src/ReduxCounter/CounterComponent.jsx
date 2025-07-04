import { useDispatch, useSelector } from 'react-redux'

const CounterComponent = () => {
   const dispatch = useDispatch()
   const count = useSelector((state) => state.count)
   return (
      <div>
         <h1>Counter: {count}</h1>
         <button onClick={() => dispatch({ type: 'increment', payload: 2 })}>증가</button>
         {/* <button onClick={() => dispatch({ type: 'increment' })}>증가</button> */}
         <button onClick={() => dispatch({ type: 'decrement', payload: 2 })}>감소</button>
         {/* <button onClick={() => dispatch({ type: 'decrement' })}>감소</button> */}
      </div>
   )
}

export default CounterComponent
