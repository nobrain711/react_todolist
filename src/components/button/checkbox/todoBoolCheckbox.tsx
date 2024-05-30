import { TodoItem } from "../../../types/types";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { StyledInput } from "./todoBoolCheckbox.styled";
import { updateTodoBool } from "../../../redux/action/todoAction";
import { AppDispatch } from "../../../redux/store";

type Props = {
  todo: TodoItem;
};

export const TodoBoolCheckbox: FC<Props> = ({ todo }) => {
  const dispatch: AppDispatch = useDispatch();

  /**
   * click event
   * todo bool value exchage
   */
  const handleToggleBool = () => {
    dispatch(updateTodoBool(todo));
  };

  return (
    <StyledInput
      type="checkbox"
      checked={todo.bool}
      onChange={handleToggleBool}
    />
  );
};
