import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ONE_SELECT } from "../../../redux/action/actionType";
import { RootState } from "../../../redux/rootReducer";
import { TodoBoolCheckbox } from "../../button/checkbox/todoBoolCheckbox";
import { TodoItem } from "../../../types/types";
import { Delete } from "../delete/delete";
import {
  StyledDetailDiv,
  StyledDetailMain,
  StyledDatailTitle,
} from "./detail.styled";
import { Back } from "../../button/back/Back";

interface Props {
  id: number;
}

export const Detail: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(oneSelect(id));
  // }, [dispatch, id]);

  // const todo: TodoItem | null = useSelector((state: RootState) => {
  //   let selected = state.todos.find((todo) => todo.id === id);
  //   return selected ? selected : null;
  // });

  /**
   * click event funtion
   * page back
   */
  const handleLoactionBack = () => {
    navigate(-1);
  };
  return (
    // <StyledDetailDiv>
    //   {todo ? (
    //     <StyledDetailMain>
    //       <StyledDatailTitle>{todo.name}</StyledDatailTitle>
    //       <TodoBoolCheckbox todo={todo} />
    //       <Delete todo={todo} />
    //       <Back />
    //     </StyledDetailMain>
    //   ) : (
    //     <StyledDetailMain>
    //       <div>not found data</div>
    //       <div onClick={handleLoactionBack}>go Back</div>
    //     </StyledDetailMain>
    //   )}
    // </StyledDetailDiv>
    <>not found data</>
  );
};
