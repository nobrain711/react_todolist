import { FC } from "react";
import { useDispatch } from "react-redux";
import { DELETED } from "../../../modules/action/actionType";
import { TodoItem } from "../../../modules/types/types";

interface Props {
  todo: TodoItem;
}
export const Delete: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  /**
   * perform the delete function
   * When job data is not null
   * Check to see if todo data is deleted
   * Delete data when commenting on deletion
   */
  const handleTodoDelete = () => {
    if (todo) {
      const confirmed = window.confirm(
        `${todo.name}을 정말로 삭제 하시겠습니까?`
      );
      if (confirmed) {
        console.log(`${todo.name}을 삭제합니다.`);
        console.log(`${todo.id}`);

        dispatch({ type: DELETED, payload: todo });
      }
    }
  };

  return <div onClick={handleTodoDelete}>delete</div>;
};
