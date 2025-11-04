import React from 'react'
import { useTasks } from '../context/TasksContext.jsx'
import TaskItem from './TaskItem.jsx'

export default function TaskList() {
  const { tasks } = useTasks()
  if (!tasks.length) {
    return <p className="small">No tasks yet. Add your first one!</p>
  }
  return (
    <ul className="reset stack">
      {tasks.map(t => <TaskItem key={t.id} task={t} />)}
    </ul>
  )
}
