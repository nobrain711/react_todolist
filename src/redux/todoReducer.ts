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
  /** TodoState의 type으로 switch문을 실행
   * FETCH_TODOS_REQUEST
   * 현재 데이터 요청을 보냈다는 의미로 사용 
   * FETCH_TODOS_SUCCESS
   * 보낸 요청이 성공적으로 처리가 되었다 의미
   * FETCH_TODOS_FAILURE
   * 보낸 요청이 성공적으로 처리 되지 않음을 의미*/
  
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, todos: action.payload };

    case FETCH_TODOS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case ADD_TODO:
      return state;

    default:
      return state;
  }
};
