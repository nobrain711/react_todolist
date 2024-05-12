import { useLocation, useNavigate } from "react-router-dom";
import { Add } from "../../add/add";
import { useEffect, useState } from "react";

export const Header = () => {
  const navigate = useNavigate();
  const [view, SetView] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const regex = /^\/edits\/\d+$/;

    if (regex.test(location.pathname)) {
      SetView(false);
    } else {
      SetView(true);
    }
  }, [location]);

  const handleMove = () => {
    navigate("/");
  };

  return (
    <>
      <div onClick={handleMove}>TodoList</div>
      {view ? <Add /> : null}
    </>
  );
};
