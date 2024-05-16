import { TodoItem } from "../types/types";
import {
  ADD_TODO,
  DELETED,
  ONE_SELECT,
  TOGGLE_BOOL,
  UPDATED,
} from "./action/actionType";
import { dummyData } from "../types/dummyData";

const initialtodos: TodoItem[] = dummyData;

const todoReducer = (todos = initialtodos, action: any) => {
  switch (action.type) {
    // exchage todo bool value
    case TOGGLE_BOOL:
      let tId: number = action.payload;
      return todos.map((todo) =>
        todo.id === tId ? { ...todo, bool: !todo.bool } : todo
      );

    // data add todo
    case ADD_TODO:
      return [
        ...todos,
        {
          id: todos.length + 1,
          name: action.payload,
          bool: false,
        },
      ];

    // todo data update
    case UPDATED:
      let uId: number = action.payload.id;

      return todos.map((todo) =>
        todo.id === uId
          ? {
              ...todo,
              name: action.payload.name,
            }
          : todo
      );

    // data deleted todo
    case DELETED:
      let deleteTodo = action.payload;

      return todos.filter((todo) => todo.id !== deleteTodo.id);

    // data one selected
    case ONE_SELECT:
      let sId: number = action.payload;

      return todos.map((todo) =>
        todo.id === sId
          ? { ...todo, seleted: true }
          : { ...todo, seleted: false }
      );

    // default return now data
    default:
      return todos;
  }
};

export default todoReducer;
