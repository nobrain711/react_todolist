import { FC, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { oneSelect } from "../../../modules/action/actionOneSelect";
import { useSelector } from "react-redux";
import { RootState } from "../../../modules/redux/rootReducer";
import { TodoItem } from "../../../modules/types/types";
import { UPDATED } from "../../../modules/action/actionType";

interface Props {
  id: number;
}

export const Edit: FC<Props> = ({ id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    dispatch(oneSelect(id));
  }, [dispatch, id]);

  /**
   * todo item select for state
   */

  const todo: TodoItem | null = useSelector((state: RootState) => {
    let selected = state.todos.find((todo) => todo.id === id);
    return selected ? selected : null;
  });

  /**
   * name value check is noting input
   * alert data use time sumbit funtion call
   * @param event :HTMLTag event
   */

  const handleTodoUpdate = (event: FormEvent) => {
    event.preventDefault();
    if (name === "") {
      alert("Please enter what you need to do!!!");
    } else {
      submit();
    }
  };

  /**
   * todo data update and back page
   */
  const submit = () => {
    dispatch({ type: UPDATED, payload: { id: id, name: name } });
    setName("");
    alert("Your registration is complete.");
    navigate(-1);
  };

  /**
   * click evnet funiton is not update todo and
   * move back page
   */

  const hendleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      {todo ? (
        <>
          <form onSubmit={handleTodoUpdate}>
            <input
              type="text"
              value={name}
              placeholder={todo.name}
              onChange={(event) => setName(event.target.value)}
            />
            <button type="button" onClick={handleTodoUpdate}>
              submit
            </button>
            <button type="button" onClick={hendleCancel}>
              Cancel
            </button>
          </form>
        </>
      ) : (
        <div>not found data</div>
      )}
    </>
  );
};
