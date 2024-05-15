import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "./Back.styled";

interface Props {}

export const Back: FC = () => {
  const navigate = useNavigate();

  const hanldeLocationBack = () => {
    navigate(-1);
  };

  return (
    <StyledBackButton onClick={hanldeLocationBack}>Go Back</StyledBackButton>
  );
};
