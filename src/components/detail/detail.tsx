import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { oneSelect } from "../../modules/action/actionOneSelect";
import { RootState } from "../../modules/redux/rootReducer";
import { TodoBoolCheckbox } from "../checkbox/todoBoolCheckbox";
import { TodoItem } from "../../modules/types/types";
import { Delete } from "../delete/delete";

interface Props {
  id: number;
}

export const Detail: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneSelect(id));
  }, [dispatch, id]);

  const todo: TodoItem | null = useSelector((state: RootState) => {
    let selected = state.todos.find((todo) => todo.id === id);
    return selected ? selected : null;
  });

  const handleLoactionBack = () => {
    navigate(-1);
  };
  return (
    <>
      {todo ? (
        <>
          <h2>{todo.name}</h2>
          <TodoBoolCheckbox todo={todo} />
          <Delete todo={todo} />
        </>
      ) : (
        <div>not found data</div>
      )}
      <div onClick={handleLoactionBack}>go Back</div>
    </>
  );
};
