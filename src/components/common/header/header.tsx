import { useLocation, useNavigate } from "react-router-dom";
import { Add } from "../../add/add";
import { useEffect, useState } from "react";
import { StyledHeader, StyledTitle } from "./header.styled";

export const Header = () => {
  const navigate = useNavigate();
  const [view, SetView] = useState(true);
  const location = useLocation();

  /**
   * Address verification and /edits/:id
   * Set not to view Add component
   */
  useEffect(() => {
    const regex = /^\/edits\/\d+$/;

    if (regex.test(location.pathname)) {
      SetView(false);
    } else {
      SetView(true);
    }
  }, [location]);

  /**
   * click event funtion
   * move page for root
   */
  const handleMove = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <StyledTitle onClick={handleMove}>TodoList</StyledTitle>
      {view ? <Add /> : null}
    </StyledHeader>
  );
};
