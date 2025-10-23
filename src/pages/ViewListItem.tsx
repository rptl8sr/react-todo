import { ToDo } from '../models';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


export const ViewListItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();
  const todoList = useSelector((state: RootState) => state.todoList.todos);


  useEffect(() => {
    const neededTodo = todoList.find((todo) => String(todo.id) === id);
    if (neededTodo) {
      setTodo(neededTodo);
    } else {
      navigate('/404');
    }

    return () => {
      setTodo(undefined);
    }
  }, [id, navigate, todoList])

  return (
    <h1 className="container">{todo?.text}</h1>
  )
}