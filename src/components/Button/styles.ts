import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<ButtonProps>`
  all: unset;
  cursor: pointer;

  padding: 20px 0;

  display: flex;
  justify-content: center;

  width: 100%;

  background: ${(props) => props?.color};
  color: #fff;

  border-radius: 50px;

  font-size: 24px;
  font-weight: 700;

  @media (max-width: 550px) {
    font-size: 18px;
    overflow: hidden;
  }

  &:hover {
    opacity: 0.7;
  }
`;
