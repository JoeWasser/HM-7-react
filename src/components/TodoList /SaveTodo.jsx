import React from 'react';
import styles from "./SaveTodo.module.css";

export default function SaveTodo ({todos, deleteTodo,toggleCompleted}) {

    return (
        <div>
            {todos.map((todo)=>
                <div key={todo.id} className={todo.completed ? `${styles.todoCard} ${styles.done}` : `${styles.todoCard} ${styles.undone}`}>
                    <h2>{todo.title}</h2>
                    <h2>{todo.completed ? 'True' : 'False'}</h2>
                    <button onClick={() => toggleCompleted(todo.id)}>{todo.completed ? "done" : "undone"}</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            )}
        </div>
    );
};

