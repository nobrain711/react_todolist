import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { one_select } from "../../modules/action/actionOneSelect";
import { RootState } from "../../modules/redux/rootReducer";
import { TodoBoolCheckbox } from "../checkbox/todoBoolCheckbox";
import { TodoItem } from "../../modules/types/types";

interface Props {
  id: number;
}

export const Detail: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(one_select(id));
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
        </>
      ) : (
        <div>not found data</div>
      )}
      <button onClick={handleLoactionBack}>go Back</button>
    </>
  );
};
