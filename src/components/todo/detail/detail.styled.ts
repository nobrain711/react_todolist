import styled from "styled-components";

export const StyledDetailDiv = styled.div`
  display: grid;
  place-items: center;
`;
export const StyledDetailMain = styled.div`
  width: 50%;
  display: grid;
  justify-items: center;
`;

export const StyledDatailTitle = styled.div`
  align-items: center;
  font-size: 4rem;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledBackButton = styled.div`
  display: grid;
  width: 10rem;
  height: 4rem;
  text-align: center;
  align-items: center;
  font-size: 2rem;
  background-color: gray;
  border-radius: 1rem;
`;
