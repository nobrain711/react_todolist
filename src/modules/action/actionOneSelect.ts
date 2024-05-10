import { ONE_SELECT } from "./actionType";

export const one_select = (id: number) => ({
  type: ONE_SELECT,
  payload: id,
});
