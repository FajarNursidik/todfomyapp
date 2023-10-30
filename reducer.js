import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    //Menambah ToDoList
    addTodolist: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //Menghapus ToDoList
    removeTodolist: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //Mengedit ToDoList
    updateTodolist: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //ToDoList Selesai
    completeTodolist: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: true };
        }
        return todo;
      });
    },
  },
});

export const { addTodolist, removeTodolist, updateTodolist, completeTodolist } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
