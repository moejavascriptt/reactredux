import store from './store'
import { addTask, removeTask, completedTask } from './action'

const unsubscribe = store.subscribe(() => {
  console.log('Updated', store.getState())
})

store.dispatch(addTask('Task 1'))
store.dispatch(addTask('Task 2'))
console.log(store.getState())

unsubscribe()
store.dispatch(completedTask(2))

store.dispatch(removeTask(1))
console.log(store.getState())

// const employee = { name: 'Harley', age: 22, company: 'Canada', city: 'Toronto' }
// const employee2 = { name: 'Stax', age: 35 }

// // const newEmployee = Object.assign({}, employee, {name: "Martin"})
// const newEmployee = {
//   ...employee,
//   name: 'Martin '
// }

// newEmployee.company.city = 'Calgary'

// const secondEmployee = {
//   ...employee2
// }

// console.log(employee)
// console.log(newEmployee)
// console.log(secondEmployee)
