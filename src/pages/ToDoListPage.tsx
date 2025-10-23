import { Form } from '../components/Form';
import { ToDoList } from '../components/ToDoList';
import { ToDo } from '../models';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createAction, deleteAction, updateAction } from '../feature/todoList';

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createNewTODO = (text: string) => {
    dispatch(createAction(text))
    toast.success(`Задача "${text}" добавлена!`);
  }

  const updateTodo = (item: ToDo) => {
    dispatch(updateAction(item))

    if (item.isDone) {
      toast.info(`Задача "${item.text}" отмечена как невыполненная`);
    } else {
      toast.success(`Задача "${item.text}" выполнена!`);
    }

  }

  const deleteTodo = (item: ToDo) => {
    dispatch(deleteAction(item))
    toast.error(`Задача "${item.text}" удалена`);
  }

    return (
        <>
            <Form createNewTODO={createNewTODO}/>
            <ToDoList todos={todoList} updateToDo={updateTodo} deleteToDo={deleteTodo}/>
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