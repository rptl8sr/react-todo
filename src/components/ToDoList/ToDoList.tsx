import { ToDoListItem } from './ToDoListItem';
import './ToDoList.scss';

import { ToDo } from '../../models';



export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function} ) => {
  const checkedList = () => {
    return props.todos
      .filter((item) => !item.isDone)
      .map((item: ToDo) => {
        return <ToDoListItem toDoItem={item} key={item.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>;
      })
  }

  const unCheckedList = () => {
    return props.todos
      .filter((item) => item.isDone)
      .map((item: ToDo) => {
        return <ToDoListItem toDoItem={item} key={item.id} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>;
      })
  }

  return (
    <div className="todo-container">
      <ul className="todo-list failed">
        {checkedList()}
      </ul>
      <ul className="todo-list completed">
        {unCheckedList()}
      </ul>
    </div>
  );
};