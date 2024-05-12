import { useEffect } from "react";
import { TodoItem } from "../../modules/types/types";
import { Item } from "../item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/redux/rootReducer";
import { useNavigate } from "react-router-dom";
import { Delete } from "../delete/delete";

export const List = () => {
  const todolist = useSelector((state: RootState) => state.todos);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  const moveToEdit = (id: number) => {
    navigate(`edits/${id}`);
  };

  if (!Array.isArray(todolist)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {todolist.map((todo: TodoItem) => (
          <div key={todo.id}>
            <Item todo={todo} />
            <div onClick={() => moveToEdit(todo.id)}>edit</div>
            <Delete todo={todo} />
          </div>
        ))}
      </ul>
    </>
  );
};
