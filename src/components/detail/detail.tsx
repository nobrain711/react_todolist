import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TodoItem } from "../../modules/types/types";

type Props = {
  id: number;
};

const Detail = (props: Props) => {
  const dispatch = useDispatch();
  //   const todo: TodoItem | undefined;

  return (
    <>{props.id !== 0 ? <div>{props.id}</div> : <div>not found data</div>}</>
  );
};

export default Detail;
