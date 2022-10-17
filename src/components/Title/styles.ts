import styled from "styled-components";

interface ContainerProps {
  px?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props?.px ? "auto" : "100%")};
  padding: ${(props) => `10px ${props?.px}` || "10px 0"};

  background: ${(props) => props?.theme?.backgroundItems};
  backdrop-filter: blur(2px);

  border-radius: 50px;

  display: flex;
  justify-content: center;
`;

export const Text = styled.h1`
  font-weight: 700;
  font-size: 64px;
  color: #fafafa;
`;
