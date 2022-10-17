import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 830px;
  margin: 10px auto 0;

  @media (max-width: 850px) {
    width: 100%;
    margin: 60px auto;

    > div {
      display: none;
    }
  }

  padding: 30px;

  gap: 64px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px;
  gap: 20px;

  background: ${(props) => props?.theme?.backgroundItems};
  backdrop-filter: blur(2px);

  border-radius: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  gap: 60px;

  @media (max-width: 550px) {
    flex-direction: column;
    gap: 10px;
    width: 50%;
    margin: 0 auto;
  }
`;
