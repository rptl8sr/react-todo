import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models';

interface ComponentProps {
  todos: ToDo[]
}

export const HomePage = ({ todos} : ComponentProps) => {
  return (
    <div className="container">
      {todos.length > 0 ? <h1>Задачи</h1> : <h1>Задач нет</h1>}
      {
        todos.map((todo: ToDo, index: number) => {
          return (<ListItem todo={todo} key={index}/>)
      })}
    </div>
  )
}