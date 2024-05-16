import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./Back.styled";

export const Back: FC = () => {
  const navigate = useNavigate();

  const hanldeLocationBack = () => {
    navigate('/');
  };

  return (
    <StyledBackButton onClick={hanldeLocationBack}>Go Back</StyledBackButton>
  );
};
