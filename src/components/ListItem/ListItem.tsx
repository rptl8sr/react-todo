import { ToDo } from '../../models';
import { Link } from 'react-router-dom';
import classes from './ListItem.module.scss';

export const ListItem = (props: {todo: ToDo}) => {
  return (
    <Link
      className={`${classes.link} ${props.todo.isDone ? classes.done : classes.notDone}`}
      to={`/list/${props.todo.id}`}
    >{props.todo.text}</Link>
  )
}