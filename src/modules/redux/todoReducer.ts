import { TodoItem } from "../types/types";
import { ADD_TODO, TOGGLE_BOOL } from "../action/actionType";
import { dummyData } from "../types/dummyData";

const initialState: TodoItem[] = dummyData;

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_BOOL:
      let id = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, bool: !todo.bool } : todo
      );
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          name: action.payload,
          bool: false,
        },
      ];
    default:
      return state;
  }
};

export default todoReducer;
