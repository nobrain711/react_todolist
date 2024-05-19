import { FC, KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../../redux/action/actionType";
import { StyledBtn, StyledForm, StyledInput } from "./add.syled";
import { AppDispatch } from "../../../redux/store";

export const Add: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>("");

  /**
   * Enter키를 입력 받을 시 현재 키보드 이벤트를 잠시 멈춤 기 위한 함수
   * @event의 타입은 keyboradEvent<HTMLInputElement>로 정의 되며
   * keyboardEvent에서 HTML태그 중에서 Input태그의 이벤트를 잠시 멈춤
   */
  const handelKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleTodoAdd();
    }
  };

  /**
   * name의 입력된 값이 있는지 확인하기 위한 함수
   * name의 값이 비어있지 않는 경우에 submit()함수를 호출
   * name의 값이 비어있는 경우에는 alert으로 값을 입력해 달라고 경고창 출력
   */

  const handleTodoAdd = () => {
    if (name === "") {
      alert("Please enter what you need to do!!!");
    } else {
      submit();
    }
  };

  /**
   * todo의 값을 추가하는 함수로 redux로 추가 함수 진행
   */

  const submit = () => {
    dispatch({ type: ADD_TODO, payload: name });
    setName("");
    alert("Your registration is complete.");
  };

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        handleTodoAdd();
      }}
    >
      <StyledInput
        type="text"
        placeholder="to do"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyUp={handelKeyPress}
      />
      <StyledBtn type="submit">submit</StyledBtn>{" "}
    </StyledForm>
  );
};
