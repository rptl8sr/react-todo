import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface ComponentProps {
  todos: ToDo[]
}

export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <div className="container">
      {todoList.length > 0 ? <h1>Задачи</h1> : <h1>Задач нет</h1>}
      {
        todoList.map((todo: ToDo, index: number) => {
          return (<ListItem todo={todo} key={index}/>)
      })}
    </div>
  )
}