import './index.css'

const TodoItem = props => {
  const {todoDetails, DeleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    DeleteTodo(id)
  }

  return (
    <li className="todo-item ">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
