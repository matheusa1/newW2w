import styled from "styled-components";

interface ContainerProps {
  px?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props?.px ? "auto" : "100%")};
  padding: ${(props) => `0.625rem ${props?.px}` || "0.625rem 0"};

  background: ${(props) => props?.theme?.backgroundItems};
  backdrop-filter: blur(2px);

  border-radius: 50px;

  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  color: #fafafa;
`;
