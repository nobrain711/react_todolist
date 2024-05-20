import { FC, useEffect } from "react";
import { TodoItem } from "../../../types/types";
import { Item } from "../item/Item";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { StyledUl } from "./list.styled";
import { fetchTodos } from "../../../redux/action/todoAction";
import { AppDispatch } from "../../../redux/store";

export const List: FC = () => {
  // redux와 supabase의 연동으로 인한 dispatch의 타입 지정
  const dispatch: AppDispatch = useDispatch();
  // store에서 todos의 데이터 타입과 현재 상태를 조회
  const { todos, loading } = useSelector((state: RootState) => state.todos);

  /**
   * 현재 컴포넌트가 접속 데이터 변경시 작동하는 hook
   * redux fetchTodos함수를 작동
   */
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);``

  /**
   * 비동기로 인해 대기 발생시 로딩 중 인지 알려주는 함수
   */
  if (loading) {
    return <div>Loading...</div>;
  }

  /**
   * 현재 불러온 값이 데이터가 존재하지 않을 시 출력하는 함수
   */
  if (!Array.isArray(todos) || todos.length === 0) {
    return <div>Not found data</div>;
  }

  /**
   * 렌더링 부분
   * 반복문을 이용해서 list item을 출력
   * list item를 넘버링을 위해 key={todo.id}를 사용
   */
  return (
    <StyledUl>
      {todos.map((todo: TodoItem) => (
        <Item key={todo.id} todo={todo} />
      ))}
    </StyledUl>
  );
};
