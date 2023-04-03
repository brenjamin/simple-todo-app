import React, { useState } from 'react'

function CounterButton({ header = 'Counter Button' }) {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
      <h2 className="text-3xl">{header}</h2>
      <button onClick={handleClick}>
        This button was clicked {count} time{count !== 1 ? 's' : ''}!
      </button>
    </>
  )
}

export default CounterButton
