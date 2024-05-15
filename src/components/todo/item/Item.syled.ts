import styled from "styled-components";

export const StyledIi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: steelblue;
    color: wheat;
  }
`;
export const StyledTextDiv = styled.div`
  display: flex;
`;

export const StyledSpan = styled.div`
  font-size: 2rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledEdit = styled.div``;
