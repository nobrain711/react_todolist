import { useEffect } from "react";
import { TodoItem } from "../../modules/types/types";
import { Item } from "../item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/redux/rootReducer";
import { useNavigate } from "react-router-dom";

export const List = () => {
  const todolsit = useSelector((state: RootState) => state.todos);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const moveToEdit = (id: number) => {
    navigate(`edits/${id}`);
  };

  return (
    <>
      <ul>
        {todolsit.map((todo: TodoItem) => (
          <div key={todo.id}>
            <Item todo={todo} />
            <div onClick={() => moveToEdit(todo.id)}>edit</div>
          </div>
        ))}
      </ul>
    </>
  );
};
