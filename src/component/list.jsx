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
            {todo.map((todo, index) => (
                <div className='listTodo' key={index}>
                    {console.log(todo)}
                    <input type="text" autoFocus className={`todo-item ${todo[0].status ? "coret" : ''} ${todo[0].setEdit ? "editing" : ''}`} disabled={todo[0].setEdit ? null : 'disabled'} value={todo[0].todo} onChange={(e) => edit(e)} />
                    <FontAwesomeIcon className={todo[0].status ? "icon" : "icon icon-1"} icon={todo[0].status ? faArrowRotateLeft : faCheck} onClick={() => doneTodo(todo[0].id)} />
                    <FontAwesomeIcon className='icon' icon={todo[0].setEdit ? faPaperPlane : faPen} onClick={() => editTodo(todo[0].id)}/>
                    <FontAwesomeIcon className='icon' icon={faTrash} onClick={() => deleteTodo(todo[0].id)} />
                </div>
            ))}
        </div>
    )
}

export default List
