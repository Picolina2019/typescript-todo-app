import React,{useState, useEffect} from 'react'
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';
import { ITodo } from '../../interface';

const TodosPage: React.FC = ()=>{
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
      const newTodo: ITodo = {
        title: title,
        id: Date.now(),
        completed: false,
      };
      setTodos((prev) => [newTodo, ...prev]);
    };
  
    const toggleHandler = (id: number) => {
      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      );
    };
  
    const removeHandler = (id: number) => {
      const shouldRemove = window.confirm('Are you sure you want delete a todo?');
      if (shouldRemove) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }
    };
  
    useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
    },[])
    useEffect(()=>{
   localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])
  
    return (
        <>
          <TodoForm onAdd={addHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />  
        </>
    )
}

export default TodosPage