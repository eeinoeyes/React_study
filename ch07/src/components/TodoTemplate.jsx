import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // children props에는 TodoInsert, TodoList가 함께 들어 있음
   // 컴포넌트 자체를 props로 받아와서
   return (
      <div className="TodoTemplate">
         <div className="app-title">Todo list</div>
         <div className="content">{children}</div>
         {/* 여기서 컴포넌트 출력! */}
      </div>
   )
}

export default TodoTemplate
