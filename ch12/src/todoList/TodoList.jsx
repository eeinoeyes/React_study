import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './todoSlice'
function TodoList() {
   const dispatch = useDispatch()
   const todos = useSelector((state) => state.todos)
   const [input, setInput] = useState('')
   return (
      <div>
         <input type="text" placeholder="할 일 추가" onChange={(e) => setInput(e.target.value)} />
         <button onClick={() => dispatch(add(input))}>추가</button>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text}
                  <button onClick={() => dispatch(remove(todo.id))}>삭제하기</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoList
