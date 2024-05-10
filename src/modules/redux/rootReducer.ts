import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "./todoReducer";
import { TodoItem } from "../types/types";

const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = {
  todos: TodoItem[];
};

export default rootReducer;
