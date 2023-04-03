import React, { useState, useEffect, useRef } from 'react'
import SingleToDo from './SingleToDo'

function ToDoList() {
  // initial state using useState
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const header = useRef(null)

  useEffect(() => {
    header.current.style.backgroundColor = generateRandomBgColor()
  }, [todos])

  function generateRandomBgColor() {
    const x = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    const z = Math.floor(Math.random() * 256)
    return 'rgb(' + x + ',' + y + ',' + z + ')'
  }

  function handleChange(e) {
    setNewTodo(e.target.value)
  }

  function handleAdd() {
    if (newTodo) {
      setTodos(prevState => [...prevState, newTodo])
      setNewTodo('')
    }
  }

  function handleDelete(index) {
    setTodos(
      todos.filter((item, i) => {
        return index != i
      })
    )
  }

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-center p-2 rounded-lg w-1/2 mx-auto" ref={header}>
          To Do List
        </h1>
        <h2 className="text-center py-4 text-2xl">
          {todos.length} total item{todos.length != 1 ? 's' : ''}
        </h2>
        <form
          onSubmit={e => e.preventDefault()}
          className="flex gap-2 mt-3 justify-center"
        >
          <input
            onChange={handleChange}
            value={newTodo}
            type="text"
            className="p-2 rounded-lg w-72 block"
            autoFocus
          />
          <button
            className="cursor-pointer border border-white"
            onClick={handleAdd}
            disabled={!newTodo}
            type="submit"
          >
            Add
          </button>
        </form>
        <div className="mt-6">
          {todos.length ? (
            <ul className="flex flex-col gap-5">
              {todos.map((todo, index) => (
                <SingleToDo
                  todo={todo}
                  index={index}
                  handleDelete={handleDelete}
                  key={index}
                />
              ))}
            </ul>
          ) : (
            <h2 className="text-center text-3xl">Add a todo to get started</h2>
          )}
        </div>
      </div>
    </section>
  )
}

export default ToDoList
