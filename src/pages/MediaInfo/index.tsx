import { useParams } from "react-router";
import Axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const getImage = import.meta.env.VITE_IMG;

interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MediaInfo = (props: any) => {
  const [MovieInfo, setMovieInfo] = useState<MovieInfo>();
  const [WatchProviders, setWatchProviders] = useState();

  const params = useParams();
  const { id } = params;

  const getMovieInfo = async () => {
    try {
      const responseMovieInfo = await Axios.get(
        `${moviesURL}${id}?${apiKey}&language=pt-BR`
      );
      const responseWatchProvider = await Axios.get(
        `${moviesURL}${id}/watch/providers?${apiKey}&language=pt-BR`
      );

      setMovieInfo(responseMovieInfo.data);
      setWatchProviders(responseWatchProvider.data);

      console.log(responseMovieInfo.data);
      console.log(responseWatchProvider.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieInfo();
  }, []);

  return (
    <S.Container>
      <S.LeftSide>
        <S.PosterImage src={`${getImage}${MovieInfo?.poster_path}`} />
        <S.RateWrapper>
          <S.RateText>Avaliar</S.RateText>
        </S.RateWrapper>
      </S.LeftSide>
      <S.MidSide>
        <S.Title>{MovieInfo?.title}</S.Title>
        <S.Description>{MovieInfo?.overview}</S.Description>
        <S.RatesWrapper></S.RatesWrapper>
      </S.MidSide>
      <S.RightSide>
        <S.WhereToWatch>
          <S.WhereToWatchText>Onde assistir</S.WhereToWatchText>
        </S.WhereToWatch>
        <S.IsAdult>{MovieInfo?.adult ? "Sim" : "Não"}</S.IsAdult>
      </S.RightSide>
    </S.Container>
  );
};

export default MediaInfo;
