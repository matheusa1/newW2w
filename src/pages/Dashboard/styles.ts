import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ReactLoading from 'react-loading';

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

export const InputWrapper = styled.form`
  display: flex;
  position: relative;
  width: 63rem;

  @media (max-width: 67rem) {
    width: 100%;
  }
`;

export const InputHome = styled.input`
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

export const SubmitIcon = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  right: 2.5rem;
  top: 1rem;
  width: 1.5rem;
  height: 1.5rem;
`;

export const InputIcon = styled(BsSearch)`
  color: #000;
  width: 100%;
  height: 100%;
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

export const LoadingContainer = styled.div``;
export const LoadingComponent = styled(ReactLoading)``;
export const LoadingLabel = styled.div``;
