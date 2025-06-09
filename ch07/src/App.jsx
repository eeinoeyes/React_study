import { use, useState, useRef, useCallback } from 'react'
import TodoTemplate from './components/TodoTemplate'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoListItem from './components/TodoListItem'

function App() {
   const [todos, setTodos] = useState([
      {
         id: 1,
         text: '헬스장 가기',
         checked: true,
      },
      {
         id: 2,
         text: '점심약속',
         checked: true,
      },
      {
         id: 3,
         text: '리액트 복습',
         checked: false,
      },
   ])

   const nextId = useRef(4) //DOM 직접접근 외에도 특정한 값을 저장할 때도 useRef를 사용함
   /*
nextId를 state로 지정하면 nextId가 변경될 때마다 리렌더링 -> 불필요한 소모
const nextId=4로 사용할 경우 리렌더링 될 때마다 값이 4로 회귀
=> useRef를 사용해 값을 저장하면 불필요한 추가 렌더링과 값 초기화 제어 가능
  */
   //할 일 등록
   const onInsert = useCallback(
      (text) => {
         //text: 입력한 할 일
         const todo = {
            id: nextId.current, //처음값은 4
            text, //키값과 변수가 같은 형태일 때(text: text) 하나로 써도 됨
            checked: false,
         }
         setTodos(todos.concat(todo))
         nextId.current += 1
      },
      [todos]
   )

   // 할 일 삭제
   const onRemove = useCallback(
      (id) => {
         const removedTodos = todos.filter((todo) => todo.id != id)
         setTodos(removedTodos)
      },
      [todos]
   )

   const onToggle = useCallback(
      (id) => {
         const toggleTodos = todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
         setTodos(toggleTodos)
      },
      [todos]
   )

   return (
      <TodoTemplate>
         <TodoInsert onInsert={onInsert} />
         {/* props로 전달 */}
         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
   )
}

export default App
