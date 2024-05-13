import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../modules/action/actionType";
import { StyledBtn, StyledForm, StyledInput } from "./add.syled";

export const Add = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  /**
   * enter key press running function
   * @param event :KeyboardEvent<HTMLInputElement> auto input value
   */
  const handelKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleTodoAdd();
    }
  };

  /**
   * name is not null submit funtion call
   * name is null alert
   */
  const handleTodoAdd = () => {
    if (name === "") {
      alert("Please enter what you need to do!!!");
    } else {
      submit();
    }
  };

  /**
   * todo is add funtion
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
