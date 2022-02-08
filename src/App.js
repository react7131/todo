import './App.css';
import Form from './components/form';
import TodoList from './components/todoList';
import TodoContextProvider from './todoContext';

function App() {

  return (
    <TodoContextProvider>
      <div className="App">
        <header >MY TODO LIST</header>
        <Form />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
