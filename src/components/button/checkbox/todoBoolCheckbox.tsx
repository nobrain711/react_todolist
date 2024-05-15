import { TodoItem } from "../../../modules/types/types";
import { useDispatch } from "react-redux";
import { toggle_bool } from "../../../modules/action/actionToggleBool";
import { FC } from "react";
import { StyledInput } from "./todoBoolCheckbox.styled";

type Props = {
  todo: TodoItem;
};

export const TodoBoolCheckbox: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  /**
   * click event
   * todo bool value exchage
   */

  const handleToggleBool = () => {
    dispatch(toggle_bool(todo.id));
  };

  return (
    <StyledInput
      type="checkbox"
      checked={todo.bool}
      onChange={handleToggleBool}
    />
  );
};
