import { TodoItem } from "../../types/types";
import {
  ADD_TODO,
  DELETE,
  EXCHAGNE_BOOL,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  ONE_SELECT,
  UPDATE,
} from "./actionType";

interface AddTodoAciton {
  type: typeof ADD_TODO;
}

interface DeleteTodoAciton {
  type: typeof DELETE;
  payload: { id: number };
}

interface OneSelectAction {
  type: typeof ONE_SELECT;
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
export type TodoActionTypes =
  | AddTodoAciton
  | DeleteTodoAciton
  | OneSelectAction
  | ExchagneBoolAction
  | UpdateTodoAction
  | FetchTodosRequestAction
  | FetchTodosSuccessAction
  | FetchTodosFailureAction;
