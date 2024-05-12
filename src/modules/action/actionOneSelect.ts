import { ONE_SELECT } from "./actionType";

export const oneSelect = (id: number) => ({
  type: ONE_SELECT,
  payload: id,
});
