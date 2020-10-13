import React, {useState} from 'react';
import './App.css';

import Pages from './components/firstPages';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import State from './components/State';
import Folder from './components/easyProject/folder';
import File from './components/easyProject/file';
import Lifecycle from './components/LifecycleA';
import Fragment from './components/FragmentDemo';
import Table from './components/Table';
import ParentComponent from './components/ParentComponent';
import Form from './todolist/Form';
import TodoList from './todolist/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [Todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>
          TodoList
        </h1>
      </header>
      <Form inputText={inputText} todos={Todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={Todos}/>
    </div>
  );
}

export default App;
