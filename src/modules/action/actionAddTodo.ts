import { ADD_TODO } from "./actionType";

export const added = (name: string) => ({
  type: ADD_TODO,
  payload: name,
});
