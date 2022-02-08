import React, {useContext, useEffect} from "react";
import { TodoContext } from "../todoContext";
import Todo from "./todo";

const TodoList = () => {

    const {todos, setTodos, selected, filteredTodos, setFilteredTodos} = useContext(TodoContext);
    
    useEffect( () => {
        getLocalTodos();
    },[])

    useEffect( () => {
        filterHandler();
        saveLocalTodos();
    },[todos, selected])

    const filterHandler = () => {
        switch(selected) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default: 
                setFilteredTodos(todos)
                break;
        }
    }


    const saveLocalTodos = () => {
            localStorage.setItem("todos", JSON.stringify(todos))  
    }

    const getLocalTodos = () => {
        if(localStorage.getItem("todos") === null){
            localStorage.setItem("todos", JSON.stringify([])) 
        }else {
            let localTodo = JSON.parse(localStorage.getItem("todos"))  
            setTodos(localTodo)
        }
    }

    const renderedTodos = filteredTodos.map(todo => (
        <Todo key={todo.id} todo={todo} />
    ))

    todos.filter(todo => todo.completed )

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {renderedTodos}
            </ul>
        </div>
    )
}

export default TodoList;