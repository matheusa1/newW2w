import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;

  padding: 15px;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  border: 0;

  border-radius: 50px;

  color: ${(props) => props?.theme?.text};
  font-family: Poppins;
  font-weight: 700;
  font-size: 24px;

  &::placeholder {
    opacity: 0.7;
  }

  &:focus {
    outline: 1px solid #fafafa;
  }

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;
