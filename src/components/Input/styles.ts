import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 1rem;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  border: 0;

  border-radius: 50px;

  color: ${(props) => props?.theme?.text};
  font-family: Poppins, Rubik, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;

  &::placeholder {
    opacity: 0.7;
  }

  &:focus {
    outline: 1px solid #fafafa;
  }

  @media (max-width: 34rem) {
    font-size: 1.1rem;
  }
`;
