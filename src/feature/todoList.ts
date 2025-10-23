import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ToDo } from '../models';

export interface TodoState {
  todos: ToDo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action:  PayloadAction<string>) => {
      const newTodo: ToDo = {
        id: state.todos.length,
        text: action.payload,
        isDone: false,
      };
      state.todos = [ ...state.todos, newTodo ];
    },
    updateAction: (state, action:  PayloadAction<ToDo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo
      });
    },
    deleteAction: (state, action: PayloadAction<ToDo>) => {
      state.todos = state.todos.filter(((todo) => todo.id !== action.payload.id))
    },
  },
});

// Action creators are generated for each case reducer function
export const {createAction, updateAction, deleteAction} = todoSlice.actions;

export default todoSlice.reducer;