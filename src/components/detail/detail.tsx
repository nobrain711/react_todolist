import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { one_select } from "../../modules/action/actionOneSelect";
import { RootState } from "../../modules/redux/rootReducer";

type Props = {
  id: number;
};

const Detail = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(one_select(props.id));
  }, [dispatch, props.id]);

  const todo = useSelector((state: RootState) => {
    let selected = state.todos.find((todo) => todo.id === props.id);
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
          <span>{todo.bool}</span>
        </>
      ) : (
        <div>not found data</div>
      )}
      <button onClick={handleLoactionBack}>go Back</button>
    </>
  );
};

export default Detail;
