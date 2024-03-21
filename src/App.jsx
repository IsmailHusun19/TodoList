import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';
import Form from './component/form'
import './App.css'
import List from './component/list'

function App() {
  const [getData, setData] = useState('');
  const [getDataTodos, setDataTodos] = useState('');
  const [getValue, setValue] = useState('');
  const uniqueId = uuidv4();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setDataTodos(storedTodos);
    }
  }, []);
  
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(getDataTodos));
  }, [getDataTodos]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        storedTodos.map(todo => {
          todo[0].setEdit = false;
        });
        setDataTodos(storedTodos);
      }
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  

  const btnAdd = (event) => {
    event.preventDefault();
    if(getData !== '') {
        const datatodos = [
            {
                id : uniqueId,
                todo : getData,
                status : false,
                setEdit : false,
            }
        ];
        setDataTodos([...getDataTodos, datatodos]);
        setData('');
    }
  }

  const deleteTodo = (id) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      const updatedTodos = storedTodos.filter(todo => todo[0].id !== id);
      location.reload();
      setDataTodos(updatedTodos);
    }
  }

  const doneTodo = (id) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      storedTodos.map((todo) => {
        if (todo[0].id === id){
          if(todo[0].status === false){
            return todo[0].status = true;
          }else {
            return todo[0].status = false;
          }
        }
      });
      setDataTodos(storedTodos);
    }
  }

  const editTodo = (id) => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      storedTodos.map((todo) => {
        if(todo[0].setEdit === false){
          if (todo[0].id === id){
            todo[0].setEdit = true;
          }
        }else {
          if (todo[0].id === id){
            getValue.length > 0 ? todo[0].todo = getValue : undefined;
            todo[0].setEdit = false;
          }
        }
      });
    }
    setDataTodos(storedTodos);
  }

  const editTodoValue = (value) => {
    setValue(value)
  }

  return (
    <div className='container'>
      <div className='todoList'>
        <div className='judul'><h1>Todo List</h1></div>
        <Form btnAdd={btnAdd} value={(e) => setData(e)} setValue={getData} />
        <List todo={getDataTodos} deleteTodo={(id) => deleteTodo(id)} doneTodo={(id) => doneTodo(id)} editTodo={(id) => editTodo(id)} editTodoValue={(value) => editTodoValue(value)} />
      </div>
    </div>
  )
}

export default App
