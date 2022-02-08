import { useState, useContext } from 'react';
import { TodoContext } from '../todoContext';

const Form = () => {

   const [inputText, setInputText]= useState('');
//   const [todos, setTodos] = useState([]);
//   const [filteredTodos, setFilteredTodos] = useState(todos);
//   const [selected, setSelected] = useState('all');
  const { todos, setTodos, selected, setSelected } = useContext(TodoContext);

  const handleSubmit = (e) => {
   e.preventDefault();
   inputText && setTodos([...todos, {
      text: inputText,
      id: Date.now(),
      completed: false
   }])
   setInputText('');
  }
  
  return (
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="todo-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="enter your task"
         />
         <button  type="submit">
            <i className="fas fa-plus"></i> 
         </button>
         <div className="select">
             <select onChange={(e) => setSelected(e.target.value)} value={selected} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
             </select>
         </div>
      </form>
  );
}

export default Form;
