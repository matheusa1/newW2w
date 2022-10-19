import styled from "styled-components";

export interface ButtonProps {
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

  padding: 1.2rem 0;

  display: flex;
  justify-content: center;

  width: 100%;

  background: ${(props) => props?.color};
  color: #fff;

  border-radius: 50px;

  font-size: 1.5rem;
  font-weight: 700;

  @media (max-width: 34.3rem) {
    font-size: 1.1rem;
    overflow: hidden;
  }

  &:hover {
    opacity: 0.7;
  }
`;
