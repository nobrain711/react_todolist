import { Dispatch } from "redux";
import { TodoActionTypes } from "./actions";
import {
  ADD_TODO,
  DELETE,
  UPDATE_TODO_BOOL,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODO_SUCCESS,
  UPDATE,
} from "./actionType";
import { supabase } from "../../supabaseClient";
import { test } from "./supabase";
import { TodoItem } from "../../types/types";

/**
 * supabase의 todos table의 전체 데이터 출력
 * 성공시 FEtCH_TODOS_SUCCES로 처리
 * 실패시 FETCH_TODOS_FAILURE로 처리
 * 
 * 현재 interface에는 id name bool만 작성되어 있어서 colum은 id name bool만 호출
 */
export const fetchTodos = () => async (dispatch: Dispatch<TodoActionTypes>): Promise<void> => {
  dispatch({ type: FETCH_TODOS_REQUEST });
  try {
    const { data, error } = await supabase
      .from(test)
      .select();

    if (error) throw error;
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
  }
};

export const addTodo =
  (name: string) => async (dispatch: Dispatch<TodoActionTypes>) => {
    try {
      const { data, error } = await supabase.from(test).insert([{ name }]).select();
      if (error) throw error;
      dispatch({ type: ADD_TODO, payload: data[0] })
    } catch (error: any) {
      dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
    }
  };

export const fetchTodo = (id: number) => async (dispatch: Dispatch<TodoActionTypes>) => {
  try {
    const { data, error } = await supabase.from(test).select().eq('id', id);
    if (error) throw error;
    dispatch({ type: FETCH_TODO_SUCCESS, payload: data[0] })
  } catch (error: any) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error });
  }
}

export const updateTodoBool = (todo: TodoItem) => async (dispatch: Dispatch<TodoActionTypes>) => {
  let id: number = todo.id;

  try {
    const { data, error } = await supabase.from(test).update('bool').eq('id', id).select();
    if (error) throw error;
    dispatch({ type: UPDATE_TODO_BOOL, payload: data[0] })
  } catch (error: any) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error })
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


