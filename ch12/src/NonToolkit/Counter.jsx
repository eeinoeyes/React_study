import { useDispatch, useSelector } from 'react-redux'

// 컴포넌트라서 확장자 jsx, 대문자로 시작
function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => state.value)
   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'UP', step: 2 })
            }}
         >
            +
         </button>
         <br />
         {count}
      </div>
   )
}

export default Counter
