import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { AppDispatch } from "../../../redux/store";
import { fetchTodo } from "../../../redux/action/todoAction";

interface Props {
  id: number;
}

export const Detail: FC<Props> = ({ id }) => {
  // 페이지 이동을 위해서 추가
  const navigate = useNavigate();
  // 리덕스를 이용하기 위해서 등록
  const dispatch: AppDispatch = useDispatch();

  // dispatch, id의 값이 변경되면 자동으로 실행
  useEffect(() => {
    dispatch(fetchTodo(id));
  }, [dispatch, id]);

  // 현재 todo를 받아오기위해서 실행됨
  const todo: TodoItem | undefined = useSelector((state: RootState) =>
    state.todos.todos.find((todo: TodoItem) => todo.id === id));

  // 현재 페이지에서 뒤로 이동
  const handleLoactionBack = () => {
    navigate(-1);
  };

  // 렌더링 부분 삼항 연산자 이용
  // todo가 존재하면 화면 출력
  // todo가 존재하지 안으면 not found data 출력
  return (
    <StyledDetailDiv>
      {todo ? (
        <StyledDetailMain>
          <StyledDatailTitle>{todo.name}</StyledDatailTitle>
          <TodoBoolCheckbox todo={todo} />
          <Delete todo={todo} />
          <Back />
        </StyledDetailMain>
      ) : (
        <StyledDetailMain>
          <div>not found data</div>
          <div onClick={handleLoactionBack}>go Back</div>
        </StyledDetailMain>
      )}
    </StyledDetailDiv>
  );
};
