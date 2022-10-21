import styled, { css } from "styled-components";

import { BsStarFill } from "react-icons/bs";

export type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  fontWeight?: 700 | 400;
  opacity?: 1 | 0.7;
};

export const Container = styled.div`
  display: flex;
  padding: 3rem 3rem 0;
  gap: 3rem;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;

  gap: 1rem;
`;

export const PosterImage = styled.img`
  width: 25.5rem;
`;

export const RateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const MidSide = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  width: 44%;

  gap: 1rem;
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

export const RatesWrapper = styled.div``;

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
`;

export const SimilarMoviesItem = styled.div`
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

  padding: 1rem;
`;

export const SimilarMoviesPoster = styled.img`
  width: 100%;
`;

export const SimilarMoviesTitle = styled.div``;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  position: fixed;

  right: 3rem;

  min-width: 25.5rem;
`;

export const WhereToWatch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
`;

export const WhereToWatchClass = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  > span {
    font-family: Rubik;
    font-weight: 400;
    font-size: 1.2rem;
  }
`;

export const WhereToWatchProvidersLogo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
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

  align-items: center;
`;
