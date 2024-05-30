import { TodoItem } from "../../types/types";
import {
  ADD_TODO,
  DELETE,
  EXCHAGNE_BOOL,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  UPDATE,
} from "./actionType";

interface AddTodoAciton {
  type: typeof ADD_TODO;
  payload: TodoItem;
}

interface DeleteTodoAciton {
  type: typeof DELETE;
  payload: { id: number };
}

interface ExchagneBoolAction {
  type: typeof EXCHAGNE_BOOL;
  payload: { id: number };
}

interface UpdateTodoAction {
  type: typeof UPDATE;
  payload: { id: number; name: string };
}

interface FetchTodosRequestAction {
  type: typeof FETCH_TODOS_REQUEST;
}

interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: TodoItem[];
}

interface FetchTodosFailureAction {
  type: typeof FETCH_TODOS_FAILURE;
  payload: { error: string };
}

interface FetchTodoRequestAction {
  type: typeof FETCH_TODO_REQUEST;
}

interface FetchTodoSuccessAction {
  type: typeof FETCH_TODO_SUCCESS;
  payload: TodoItem
}

export type TodoActionTypes =
  | AddTodoAciton
  | DeleteTodoAciton
  | ExchagneBoolAction
  | UpdateTodoAction
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction
  | FetchTodoRequestAction
  | FetchTodoSuccessAction;
