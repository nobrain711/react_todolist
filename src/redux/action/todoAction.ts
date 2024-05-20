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

/**
 * supabase의 todos table의 전체 데이터 출력
 * 성공시 FEtCH_TODOS_SUCCES로 처리
 * 실패시 FETCH_TODOS_FAILURE로 처리
 * 
 * 현재 interface에는 id name bool만 작성되어 있어서 colum은 id name bool만 호출
 */
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
      const {  error } = await supabase.from("todos").insert([{ name }]);
      
      if (error) throw error;
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
