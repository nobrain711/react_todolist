import { useNavigate } from "react-router-dom";
import Add from "../../add/add";

export const Header = () => {
  const navigate = useNavigate();

  const handleMove = () => {
    navigate("/");
  };

  return (
    <>
      <div onClick={handleMove}>TodoList</div>
      <Add />
    </>
  );
};
