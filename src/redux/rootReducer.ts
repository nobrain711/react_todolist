import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
