import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 50rem;

  margin: 0 auto;

  padding: 2rem;

  gap: 3rem;

  @media (max-width: 53rem) {
    width: 100%;
    margin: 3.7rem auto;
  }
`;

export const Content = styled.div`
  background: ${(props) => props?.theme?.backgroundItems};
  padding: 2rem;

  border-radius: 50px;
  min-height: 37rem;
`;

export const ContentText = styled.p`
  font-size: 1.5rem;
  color: #fff;
  font-family: Rubik;

  @media (max-width: 34.3rem) {
    font-size: 1rem;
  }
`;
