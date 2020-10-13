import React from 'react'
import Todo from "./Todo"

function Todolist({ todos, setTodos }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo 
                    key={todo.id} 
                    text={todo.text} 
                    todos={todo}
                    setTodos={setTodos}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Todolist
