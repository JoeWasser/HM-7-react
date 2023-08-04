import React, {useState} from 'react';
import styles from './App.module.css'
import CreateTodo from "./components/CreateTodo/CreateTodo.jsx";
import SaveTodo from "./components/TodoList /SaveTodo.jsx";


export default function App() {
    const [todos , setTodos] = useState([
        {id: 1 , title: 'joewasser', completed: false},
        {id: 2 , title: 'Jhorge Washington', completed: false},
        {id: 3 , title: 'Iron Arnie', completed: true}
    ])

    // эта функция передается как props ,
    const addNewTodo = (newTodo) => {
        console.log(newTodo)
        setTodos([...todos, newTodo])
    }

    const toggleCompleted = (id) => {
        console.log(id)
        const toggledTodos = todos.map((todo) => {
            if (todo.id === id) return {...todo, completed: !todo.completed}
            else return todo
        })
        setTodos([...toggledTodos])
    }

    const deleteTodo = (deleteTodo) => {
        const deletedList = todos.filter(todo => todo.id !== deleteTodo)
        setTodos([...deletedList])
        console.log(deletedList)
    }

    return (
        <div className={'container'}>
            <CreateTodo
                addNewTodo={addNewTodo}
            />
            <SaveTodo
                todos={todos}
                toggleCompleted={toggleCompleted}
                deleteTodo={deleteTodo}
            />
        </div>
    )
}