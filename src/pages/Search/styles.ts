import styled from "styled-components";

import { DebounceInput } from "react-debounce-input";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;

  gap: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  margin-top: 1.5rem;

  gap: 1rem;
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
`;

export const Results = styled.div`
  padding: 0 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
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
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 0.5rem;
  overflow: hidden;
`;

export const MovieTitle = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;
