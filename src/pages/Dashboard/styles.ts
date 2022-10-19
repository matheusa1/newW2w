import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 63rem;
`;

export const InputHome = styled.input`
  width: 100%;
  padding: 1.5rem;
  border-radius: 9999px;
  border: none;

  color: #000;

  &::placeholder {
    color: #000;
  }

  font-weight: 400;
  font-size: 1.5rem;
`;

export const InputIcon = styled(BsSearch)`
  position: absolute;
  right: 1.65rem;
  top: 1.65rem;
  color: #000;
  width: 24px;
  height: 24px;
`;

export const Carousel = styled.div``;
