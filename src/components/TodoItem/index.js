// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoList, onDeleteTodos} = props
  const {title, id} = todoList

  const onDeleteTodo = () => {
    onDeleteTodos(id)
  }
  return (
    <li className="todo-container">
      <p>{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
