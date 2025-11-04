import React from 'react'
import { useTasks } from '../context/TasksContext.jsx'

export default function TaskItem({ task }) {
  const { dispatch } = useTasks()
  return (
    <li className="item">
      <span>{task.text}</span>
      <button
        className="danger"
        onClick={() => dispatch({ type: 'deleted', id: task.id })}
        aria-label={`Delete ${task.text}`}
      >
        Delete
      </button>
    </li>
  )
}
