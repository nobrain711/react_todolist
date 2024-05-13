import { useEffect } from "react";
import { TodoItem } from "../../modules/types/types";
import { Item } from "../item/Item";
import { useSelector } from "react-redux";
import { RootState } from "../../modules/redux/rootReducer";
import { StyledUl } from "./list.styled";

export const List = () => {
  const todolist = useSelector((state: RootState) => state.todos);

  useEffect(() => {}, []);

  /**
   * todolist not data time return rendering
   */
  if (!Array.isArray(todolist)) {
    return <div>Loading...</div>;
  }

  return (
    <StyledUl>
      {todolist.map((todo: TodoItem) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </StyledUl>
  );
};
