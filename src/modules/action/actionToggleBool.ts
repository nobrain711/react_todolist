import { TOGGLE_BOOL } from "./actionType";

export const toggle_bool = (id: number) => ({
  type: TOGGLE_BOOL,
  payload: id,
});
