import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 52rem;
  margin: 1rem auto 0;

  @media (max-width: 53rem) {
    width: 100%;
    margin: 3.7rem auto;

    > div {
      display: none;
    }
  }

  padding: 2rem;

  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 2.5rem;
  gap: 1.25rem;

  background: ${(props) => props?.theme?.backgroundItems};
  backdrop-filter: blur(2px);

  border-radius: 50px;
`;

export const Buttons = styled.div`
  display: flex;

  width: 100%;

  gap: 3.75rem;

  @media (max-width: 34.375rem) {
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    margin: 0 auto;
  }
`;
