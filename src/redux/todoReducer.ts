import { TodoItem } from "../types/types";
import {
  ADD_TODO,
  DELETE,
  EXCHAGNE_BOOL,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  ONE_SELECT,
  UPDATE,
} from "./action/actionType";
import { TodoActionTypes } from "./action/actions";

interface TodoState {
  todos: TodoItem[];
  loading: boolean;
  error: string | null;
}

const initalState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoReducer = (
  state = initalState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case ADD_TODO:
      let newTodo: TodoItem = {
        id: 0,
        name: action.payload.name,
        bool: false,
      };

      return { ...state, todos: [...state.todos, newTodo] };

    default:
      return state;
  }
};
