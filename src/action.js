export const addTask = task => {
  return { type: 'ADD_TASK', payload: { task: 'Task 1' } }
}

export const removeTask = id => {
  return { type: 'REMOVE_TASK', payload: { id: id } }
}
