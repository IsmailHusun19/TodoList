import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash, faCheck, faArrowRotateLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const List = ({ todo, deleteTodo, doneTodo, editTodo, editTodoValue }) => {
    if(todo == ''){
        todo = [];
    }

    const edit = (e) => {
        editTodoValue(e.target.value)
    }

    return (
        <div className='container-listTodo' >
            {todo.map((todoItem, index) => (
                <div className='listTodo' key={index}>
                    <input type="text" autoFocus className={`todo-item ${todoItem[0].status ? "coret" : ''} ${todoItem[0].setEdit ? "editing" : ''}`} disabled={todoItem[0].setEdit ? null : 'disabled'} defaultValue={todoItem[0].todo} onChange={(e) => edit(e)} />
                    <FontAwesomeIcon className={todoItem[0].status ? "icon" : "icon icon-1"} icon={todoItem[0].status ? faArrowRotateLeft : faCheck} onClick={() => doneTodo(todoItem[0].id)} />
                    <FontAwesomeIcon className='icon' icon={todoItem[0].setEdit ? faPaperPlane : faPen} onClick={() => editTodo(todoItem[0].id)}/>
                    <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => deleteTodo(todoItem[0].id)} />
                </div>
            ))}
        </div>
    )
}

export default List
