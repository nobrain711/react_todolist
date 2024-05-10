import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../modules/action/actionType";

const Add = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  const handelKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleTodoAdd();
    }
  };

  const handleTodoAdd = () => {
    if (name === "") {
      alert("Please enter what you need to do!!!");
    } else {
      submit();
    }
  };

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

export default Add;
