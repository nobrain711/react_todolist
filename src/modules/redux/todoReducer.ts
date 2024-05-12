import { TodoItem } from "../types/types";
import {
  ADD_TODO,
  ONE_SELECT,
  TOGGLE_BOOL,
  UPDATED,
} from "../action/actionType";
import { dummyData } from "../types/dummyData";

const initialState: TodoItem[] = dummyData;

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_BOOL:
      let tId: number = action.payload;
      return state.map((todo) =>
        todo.id === tId ? { ...todo, bool: !todo.bool } : todo
      );

    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
          bool: false,
        },
      ];
    case UPDATED:
      let uId: number = action.payload.id;

      return state.map((todo) =>
        todo.id === uId
          ? {
              ...todo,
              name: action.payload.name,
            }
          : todo
      );

    case ONE_SELECT:
      let sId: number = action.payload;

      return state.map((todo) =>
        todo.id === sId
          ? { ...todo, seleted: true }
          : { ...todo, seleted: false }
      );

    default:
      return state;
  }
};

export default todoReducer;
