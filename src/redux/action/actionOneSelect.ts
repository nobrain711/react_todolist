import { ONE_SELECT } from "./actionType";

/**
 * todolist one select
 *
 * @param id number
 * @returns {type}
 */
export const oneSelect = (id: number) => ({
  type: ONE_SELECT,
  payload: id,
});
