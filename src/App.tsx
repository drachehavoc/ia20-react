import './App.css'
import Header from './todolist/Header'
import ToDoList from './todolist/ToDoList'

export default function App() {

  return <>
    <div className="App">
      <Header />
      <ToDoList />
    </div>
  </>
}
