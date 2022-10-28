import styled from "styled-components";

import { DebounceInput } from "react-debounce-input";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;

  gap: 2rem;

  padding: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  padding: 1rem 1rem 2rem;
`;

export const Text = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const Debounce = styled(DebounceInput)``;

export const Input = styled.input`
  outline: none;
  padding: 1rem;
  width: 62rem;
  border-radius: 50px;

  color: #000;
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 69rem) {
    width: 100%;
  }
`;

export const Results = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 85rem) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 0;
  }

  @media (max-width: 69rem) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 0;
  }

  @media (max-width: 34rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0;
  }
`;

export const MovieCard = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  width: 17rem;

  gap: 0.5rem;

  padding: 1rem;

  border-radius: 0.5rem;

  align-items: center;

  @media (max-width: 57rem) {
    width: 15rem;
  }

  @media (max-width: 47rem) {
    width: 13rem;
  }

  @media (max-width: 40rem) {
    width: 12rem;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;
  overflow: hidden;

  object-fit: cover;
`;

export const MovieTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;
