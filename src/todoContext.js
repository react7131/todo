import { useState,createContext } from "react";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [selected, setSelected] = useState('all');

  const value = {
    todos, setTodos, filteredTodos, setFilteredTodos, setSelected, selected
  }
    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;