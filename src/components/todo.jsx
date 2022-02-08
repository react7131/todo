import React, {useContext} from "react";
import { TodoContext } from "../todoContext";

const Todo = ({todo}) => {
    const {todos, setTodos} = useContext(TodoContext);
    
    const completeHandler = (id) => {
        const newTodos = todos.map(todo =>  todo.id !== id ? todo : {...todo, completed: !todo.completed} )
        
        setTodos(newTodos)
        };

        const removeHandler = (id) => {
            const filteredTodos = todos.filter( todo => todo.id !== id)
            setTodos(filteredTodos)
        }
       
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
                <button className="complete-btn" onClick={ () => completeHandler(todo.id)}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={() => removeHandler(todo.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
        </div>
    )
}

export default Todo;