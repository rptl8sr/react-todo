
import { ToDo } from '../../../models';
import { ToDoControl, ToDoControls, ToDoItem, ToDoSpan } from './TodoListItem.styled';

import checkIcon from '../../../assets/images/check.png';
import uncheckIcon from '../../../assets/images/uncheck.png';
import trashIcon from '../../../assets/images/trash.png';


export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function}) => {
  return (
    <ToDoItem>
      <ToDoSpan>{props.toDoItem.text}</ToDoSpan>
      <ToDoControls>
        <ToDoControl
          icon={trashIcon}
          onClick={() => props.deleteToDo(props.toDoItem)}
        ></ToDoControl>
        <ToDoControl
          icon={props.toDoItem.isDone ? checkIcon : uncheckIcon}
          onClick={() => props.updateToDo(props.toDoItem)}
        ></ToDoControl>
      </ToDoControls>
    </ToDoItem>
  )
}