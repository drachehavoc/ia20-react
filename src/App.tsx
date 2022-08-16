import { useState } from 'react'
import './App.css'
import Header from './todolist/Header'
import ToDoList from './todolist/ToDoList'
import { TodoListContextProvider } from './todolist/TodoListContext'

// props drilling

export default function App() {

  return <>
    <div className="App">
      <TodoListContextProvider>
        <Header />
        <ToDoList title="Escreva alguma coisa" />
      </TodoListContextProvider>
    </div>
  </>
}
