import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 51rem;

  margin: 1rem auto 0;
  padding: 2rem;

  gap: 3.7rem;

  @media (max-width: 53rem) {
    width: 100%;
    margin: 3.7rem auto;

    > div {
      display: none;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 4rem 2.5rem;
  gap: 3rem;

  background: ${(props) => props?.theme?.backgroundItems};
  backdrop-filter: blur(2px);

  border-radius: 50px;

  @media (max-width: 53rem) {
    gap: 1rem;
    padding: 2rem 2rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 4rem;

  @media (max-width: 53rem) {
    margin-top: 1rem;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    margin: 0 auto;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const NotRegistered = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const RegisterLink = styled(Link)`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => props?.theme?.hyperlinkText};
  text-decoration: none;
`;
