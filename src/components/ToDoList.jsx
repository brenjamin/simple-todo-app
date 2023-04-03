import React, { useState, useEffect, useRef } from 'react'
import SingleToDo from './SingleToDo'

function ToDoList() {
  // initial state using useState
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  // add ref for header
  const header = useRef(null)

  // add use effect when todos is updated to generate random bg color for header
  useEffect(() => {}, [])

  function generateRandomBgColor() {
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    return 'rgb(' + x + ',' + y + ',' + z + ')'
  }

  // update input value on change
  function handleChange(e) {}

  // add new todo
  function handleAdd() {}

  // delete todo
  function handleDelete(index) {}

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-center p-2 rounded-lg w-1/2 mx-auto">To Do List</h1>
        <h2 className="text-center py-4 text-2xl">
          {/* add number of todos */} total todos
        </h2>
        {/* add todo form */}

        {/* conditionally render todos list */}
        <div className="mt-6"></div>
      </div>
    </section>
  )
}

export default ToDoList
