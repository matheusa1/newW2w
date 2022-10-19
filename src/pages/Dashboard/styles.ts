import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

interface CarouselProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 2rem;

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

  @media (max-width: 67rem) {
    width: 100%;
  }
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
  width: 1.5rem;
  height: 1.5rem;
`;

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselRoot = styled(Carousel)`
  width: min(62.5rem, 100%);
  margin: 0 auto;

  height: 60%;
  @media (max-width: 34.3rem) {
    height: 100%;
  }
`;

export const CarouselItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  width: min(59rem, 94%);
  > img {
    height: 100%;
  }

  :hover {
    cursor: pointer;
  }
`;

export const CarouselText = styled.span`
  position: absolute;

  font-size: 1rem;
  background: #000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  opacity: 0.8;

  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
