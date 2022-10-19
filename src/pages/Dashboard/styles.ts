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

  background: ${(props) => props?.theme?.body};
  color: ${(props) => props.theme.text};

  font-weight: 400;
  font-size: 1.5rem;
`;

export const InputIcon = styled(BsSearch)`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  color: ${(props) => props.theme.text};
`;

export const Carousel = styled.div``;
