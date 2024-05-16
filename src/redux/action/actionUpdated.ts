import { UPDATED } from "./actionType";

export const updated = (id: number, name: string) => ({
  type: UPDATED,
  payload: {
    id: id,
    name: name,
  },
});
