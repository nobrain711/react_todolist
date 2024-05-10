import { FC, useEffect } from "react";
import { TodoItem } from "../../modules/types/types";
import { Item } from "../item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/redux/rootReducer";
import { useDispatch } from "react-redux";
import { toggle_bool } from "../../modules/action/actionToggleBool";

export const List: FC = () => {
  const todolsit = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const haldeToggleBool = (id: number) => {
    dispatch(toggle_bool(id));
  };

  return (
    <>
      <ul>
        {todolsit.map((todo: TodoItem) => (
          <Item todo={todo} toggleBool={haldeToggleBool} />
        ))}
      </ul>
    </>
  );
};
