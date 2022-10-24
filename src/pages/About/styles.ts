import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 50rem;

  margin: 0 auto;
  gap: 3rem;
`;

export const Content = styled.div`
  background: ${(props) => props?.theme?.backgroundItems};
  padding: 2rem;

  border-radius: 50px;
  min-height: 37rem;
`;

export const ContentText = styled.p`
  font-size: 1.5rem;
  color: #FFF;
  font-family: Rubik;
`;
