import { Dispatch } from "redux";
import { TodoActionTypes } from "./actions";
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
import { supabase } from "../../supabaseClient";

export const fetchTodos = () => async (dispatch: Dispatch<TodoActionTypes>) => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  try {
    const { data, error } = await supabase
      .from("todos")
      .select("id, name, bool");

    if (error) throw error;
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
  }
};

export const addTodo =
  (name: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const { data, error } = await supabase.from("todos").insert([{ name }]);
      dispatch({ type: ADD_TODO, payload: { data } });
      if (error) {
        throw error;
      }
    } catch (error: any) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
    }
  };

export const updateTodo = (id: number, name: string) => ({
  type: UPDATE,
  payload: { id, name },
});

export const delecteTodo = (id: number) => ({
  type: DELETE,
  payload: { id },
});

export const selectTodo = (id: number) => ({
  type: ONE_SELECT,
  payload: { id },
});

export const exchagneTodoBool = (id: number) => ({
  type: EXCHAGNE_BOOL,
  pacyload: { id },
});
