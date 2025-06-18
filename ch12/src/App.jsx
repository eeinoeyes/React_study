import { useState } from 'react'
import './App.css'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'
import { Provider } from 'react-redux'
// import Counter from './UseToolkit/Counter'
// import storeUseToolkit from './UseToolkit/store'
// import User from './UseToolkit/User'
// import Counter from './ToolkitCounter/Counter'
// import counterstore from './ToolkitCounter/store'
// import Multiple from './multiple/Multiple'
// import multipleStore from './multiple/multipleStore'
import TodoList from './todoList/TodoList'
import todoStore from './todoList/todoStore'

function App() {
   return (
      // <Provider store={storeUseToolkit}>
      //    <Counter />
      //    <User />
      // </Provider>
      // <Provider store={counterstore}>
      //    <Counter />
      // </Provider>
      // <Provider store={multipleStore}>
      //    <Multiple />
      // </Provider>
      <Provider store={todoStore}>
         <TodoList />
      </Provider>
   )
}

export default App
