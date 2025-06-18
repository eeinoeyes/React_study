import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'

import { addTodo, removeTodo } from './todoSlice'

function TodoApp() {
   const todos = useSelector((state) => state.todos)
   const dispatch = useDispatch()
   const [input, setInput] = useState('')
   return (
      <div>
         <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
               if (e.key === 'Enter') {
                  dispatch(addTodo(input))
                  setInput('')
               }
            }}
         />
         <button
            onClick={() => {
               dispatch(addTodo(input))
               setInput('')
            }}
         >
            추가하기
         </button>
         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.value}
                  <button onClick={() => dispatch(removeTodo(todo.id))}>삭제하기</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default TodoApp
