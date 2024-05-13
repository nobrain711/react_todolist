import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../modules/action/actionType";

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
    <>
      <form onSubmit={handleTodoAdd}>
        <input
          type="text"
          placeholder="to do"
          value={name}
          onChange={(event) => setName(event.target.value)}
          onKeyDown={handelKeyPress}
        />
        <button type="button" onClick={handleTodoAdd}>
          submit
        </button>
      </form>
    </>
  );
};
