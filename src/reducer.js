import * as actionTypes from './actionTypes'
let id = 0

export default function reducer (state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false
        }
      ]

    case actionTypes.REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id)

    case actionTypes.TASK_COMPLETED:
      return state.map(task =>
        task.id === action.payload.id
          ? {
              ...task,
              completed: true
            }
          : task
      )

    default:
      return state
  }

  // if(action.type === "ADD_TASK") {
  //     return [
  //         ...state,
  //         {
  //             id: ++id,
  //             task: action.payload.task,
  //             completed: false
  //         }
  //     ]
  // }

  // else if (action.type === "REMOVE_TASK") {
  //     return state.filter(task => task.id !== action.payload.id)
  // }

  // return state
}
