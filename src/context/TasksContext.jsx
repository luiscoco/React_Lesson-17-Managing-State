import React, { createContext, useContext, useReducer } from 'react'
import { tasksReducer } from '../reducers/tasksReducer.js'

const TasksContext = createContext()

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, [])
  const value = { tasks, dispatch }
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}

export function useTasks() {
  const ctx = useContext(TasksContext)
  if (!ctx) throw new Error('useTasks must be used within a TasksProvider')
  return ctx
}
