import React, { useState } from 'react'
import { useTasks } from '../context/TasksContext.jsx'

export default function AddTask() {
  const { dispatch } = useTasks()
  const [text, setText] = useState('')

  function handleAdd() {
    const value = text.trim()
    if (!value) return
    dispatch({ type: 'added', id: Date.now(), text: value })
    setText('')
  }

  return (
    <div className="row">
      <input
        className="grow"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task…"
        aria-label="Task text"
      />
      <button className="primary" onClick={handleAdd}>Add</button>
    </div>
  )
}
