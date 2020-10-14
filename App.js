import React, {useState, useEffect} from 'react';
import './App.css';

// import Pages from './components/firstPages';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import State from './components/State';
// import Folder from './components/easyProject/folder';
// import File from './components/easyProject/file';
// import Lifecycle from './components/LifecycleA';
// import Fragment from './components/FragmentDemo';
// import Table from './components/Table';
// import ParentComponent from './components/ParentComponent';
import Form from './todolist/Form';
import TodoList from './todolist/TodoList';

function App() {
  
  //useState
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodo] = useState([]);

  // RUN ONE when the app start
  useEffect(() => {
    getLocalTodos();
  }, [])

  // useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos()
  }, [todos, status]);

  // Function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodo(todos.filter((todo) => todo.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodo(todos.filter((todo) => todo.completed === false ));
        break;
      default:
        setFilteredTodo(todos)
        break;
    }
  }

  // save local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>
          TodoList
        </h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
