import styled, { css } from "styled-components";

import { BsStarFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 700 | 400;
  opacity?: 1 | 0.7;
};

export const Container = styled.div`
  display: flex;
  padding: 3rem 3rem;
  gap: 3rem;

  @media (max-width: 34.3rem) {
    flex-direction: column;
  }

  @media (max-width: 65rem) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  width: 25%;

  gap: 1rem;

  @media (max-width: 34.3rem) {
    position: static;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 65rem) {
    position: static;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 87.5rem) {
    position: static;
  }
`;

export const PosterImage = styled.img`
  width: 25.5rem;

  @media (max-width: 100rem) {
    width: 100%;
  }

  @media (max-width: 65rem) {
    width: 50%;
  }
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const MidSide = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 44%;

  gap: 1rem;

  @media (max-width: 65rem) {
    width: 100%;
  }
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.1rem;
`;

export const Title = styled("h1").attrs<TitleProps>(({ level }) => ({
  as: `h${level}`,
}))<TitleProps>`
  ${({ fontWeight = 700, opacity = 1 }) => css`
    font-weight: ${fontWeight};
    opacity: ${opacity};
  `}
`;

export const Description = styled.span`
  font-family: Rubik;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GenresList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const GenresItem = styled.span`
  font-family: Rubik;
  font-weight: 400;
  font-size: 1rem;
  opacity: 0.8;
`;

export const RatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IMDbRate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StarFullFillIcon = styled(BsStarFill)`
  color: #f5c518;

  width: 1.5rem;
  height: 1.5rem;
`;

export const NameRateWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-family: Rubik;
  font-weight: 400;
  font-size: 1.2rem;
`;

export const RateInfo = styled.div`
  font-family: Rubik;
  font-weight: 400;
  font-size: 1rem;
`;

export const SimilarMoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SimilarMoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 87.5rem) {
    flex-wrap: nowrap;
    overflow-x: auto;
  }
`;

export const SimilarMoviesItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.5rem;

  width: 15rem;

  cursor: pointer;
  border-radius: 0.5rem;
  overflow: hidden;

  background: ${({ theme }: any) => theme.menuColor};

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.7;
  }

  padding: 1rem;
  text-decoration: none;

  @media (max-width: 87.5rem) {
    overflow: visible;
  }
`;

export const SimilarMoviesPoster = styled.img`
  width: 10rem;
`;

export const SimilarMoviesTitle = styled.span`
  text-decoration: none;
  font-family: Rubik;
  font-weight: 400;
  font-size: 1rem;
  opacity: 0.8;
  color: ${({ theme }: any) => theme.text};
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  position: fixed;

  right: 3rem;

  width: 20%;

  @media (max-width: 34.3rem) {
    position: static;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 65rem) {
    position: static;
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 87.5rem) {
    position: static;
  }
`;

export const WhereToWatch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  align-items: center;
`;

export const WhereToWatchClass = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  gap: 0.5rem;

  > span {
    font-family: Rubik;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

export const WhereToWatchProvidersLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;

export const LogoProvider = styled.img`
  width: 6rem;
  height: 6rem;

  object-fit: cover;
  border-radius: 1rem;
`;

export const IsAdult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  align-items: center;
`;
