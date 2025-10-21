import { ToDo } from '../models';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ComponentProps {
  todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const neededTodo = todos.find((todo) => String(todo.id) === id);
    if (neededTodo) {
      setTodo(neededTodo);
    } else {
      navigate('/404');
    }

    return () => {
      setTodo(undefined);
    }
  }, [id, navigate, todos])

  return (
    <h1 className="container">{todo?.text}</h1>
  )
}