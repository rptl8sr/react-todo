import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { ToDoList } from '../components/ToDoList';
import { ToDo } from '../models';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const createNewTODO = (text: string) => {
    const newTodo: ToDo = {
      id: todos.length,
      text: text,
      isDone: false,
    }

    setTodos([...todos, newTodo]);
    toast.success(`Задача "${text}" добавлена!`);
  }

  const updateTodo = (item: ToDo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === item.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    })

    setTodos(newTodos);

    if (item.isDone) {
      toast.info(`Задача "${item.text}" отмечена как невыполненная`);
    } else {
      toast.success(`Задача "${item.text}" выполнена!`);
    }

  }

  const deleteTodo = (item: ToDo) => {
    const newTodos = todos.filter(((todo) => todo.id !== item.id))

    setTodos(newTodos);
    toast.error(`Задача "${item.text}" удалена`);

  }

    return (
        <>
            <Header />
            <Form createNewTODO={createNewTODO}/>
            <ToDoList todos={todos} updateToDo={updateTodo} deleteToDo={deleteTodo}/>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />

        </>
    )
}