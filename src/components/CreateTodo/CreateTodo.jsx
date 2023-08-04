import React, {useState} from 'react';
import styles from './CreateTodo.module.css'

export default function CreateTodo({addNewTodo}) {
    const [title, setTitle] = useState('')

    const addTodo = (event) => {
        event.preventDefault()
        if(title.trim() !== ""){
            const newTodo = {
                id: Date.now(),
                title: title,
                completed: false
            }
            // setTodos([...todos, newTodo])
            addNewTodo(newTodo)
            setTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={addTodo} className={styles.form}>
                <h2>Create-ToDO</h2>
                <input
                    className={styles.input}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    type="text"
                    placeholder={'Enter todo title:'}
                />
                <button className={styles.btn}>Create Todo</button>

            </form>
        </div>
    )
}