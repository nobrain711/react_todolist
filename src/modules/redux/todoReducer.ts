import { TodoItem } from "../types/types";
import { ADD_TODO, ONE_SELECT, TOGGLE_BOOL } from "../action/actionType";
import { dummyData } from "../types/dummyData";

const initialState: TodoItem[] = dummyData;

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_BOOL:
      let tId = action.payload;
      return state.map((todo) =>
        todo.id === tId ? { ...todo, bool: !todo.bool } : todo
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
    case ONE_SELECT:
      let oId = action.payload;

      return state.map((todo) => (todo.id === oId ? { todo } : null));

    default:
      return state;
  }
};

export default todoReducer;
