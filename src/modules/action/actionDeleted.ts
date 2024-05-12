import { DELETED } from "./actionType";

export const deleted = (id: number) => ({
  type: DELETED,
  payload: id,
});
