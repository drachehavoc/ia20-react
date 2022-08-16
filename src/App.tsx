import { useState } from 'react'
import './App.css'
import Header from './todolist/Header'
import ToDoList from './todolist/ToDoList'

// props drilling

export default function App() {
  const stateList = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if (dadosLocais)
      return JSON.parse(dadosLocais) as string[]
    return ["Dunha", "Dirce"]
  })

  return <>
    <div className="App">
      <Header stateList={stateList} />
      <ToDoList title="Escreva alguma coisa" stateList={stateList} />
    </div>
  </>
}
