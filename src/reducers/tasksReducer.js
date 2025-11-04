export function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added':
      return [...tasks, { id: action.id, text: action.text }]
    case 'deleted':
      return tasks.filter(t => t.id !== action.id)
    default:
      return tasks
  }
}
