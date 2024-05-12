import { TodoItem } from "../../modules/types/types";
import { useDispatch } from "react-redux";
import { toggle_bool } from "../../modules/action/actionToggleBool";
import { FC } from "react";

type Props = {
  todo: TodoItem;
};

export const TodoBoolCheckbox: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleBool = () => {
    dispatch(toggle_bool(todo.id));
  };

  return (
    <input type="checkbox" checked={todo.bool} onChange={handleToggleBool} />
  );
};
