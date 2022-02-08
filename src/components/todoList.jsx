import React, {useContext} from "react";
import { TodoContext } from "../todoContext";
import Todo from "./todo";

const TodoList = () => {

    const {todos} = useContext(TodoContext);

    const renderedTodos = todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
    ))

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {renderedTodos}
            </ul>
        </div>
    )
}

export default TodoList;