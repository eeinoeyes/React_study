import './css/TodoList.css'
import TodoListItem from './TodoListItem'

function TodoList({ todos, onRemove, onToggle }) {
   return (
      <div className="TodoList">
         {todos.map((todo) => {
            return <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         })}
      </div>
   )
}

export default TodoList
