import React from 'react'
import { FaTrash } from 'react-icons/fa'

function SingleToDo({ todo, index, handleDelete }) {
  return (
    <li className="border border-white py-3 px-4 rounded-md flex justify-between items-center">
      <span>{todo}</span>
      <button
        onClick={e => handleDelete(index)}
        aria-label="Delete item"
        className="hover:bg-neutral-700 rounded-md transition-all duration-200"
      >
        <FaTrash />
      </button>
    </li>
  )
}

export default SingleToDo
