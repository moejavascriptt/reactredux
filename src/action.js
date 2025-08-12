import * as actionTypes from './actionTypes'

export const addTask = task => {
  return { type: actionTypes.ADD_TASK, payload: { task: 'Task 1' } }
}

export const removeTask = id => {
  return { type: actionTypes.REMOVE_TASK, payload: { id: id } }
}

const completedTask = id => {
  return { type: actionTypes.TASK_COMPLETED, payload: { id: id } }
}
