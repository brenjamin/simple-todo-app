import { useState } from 'react'
import './App.css'
import CounterButton from './components/CounterButton'
import ToDoList from './components/ToDoList'

function App() {
  return (
    <div className="App">
      <main>
        <ToDoList />
      </main>
    </div>
  )
}

export default App
