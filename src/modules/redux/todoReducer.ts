import { TodoItem } from "../types/types";
import { TOGGLE_BOOL } from "../action/actionType";
import { dummyData } from "../types/dummyData";

const initialState: TodoItem[] = dummyData;

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_BOOL:
      const id = action.payload;
      return state.map((todo) =>
        todo.id === id ? { ...todo, bool: !todo.bool } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;
