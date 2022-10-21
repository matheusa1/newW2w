import { useParams } from "react-router";
import Axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const getImage = import.meta.env.VITE_IMG;

interface GenresInfoProps {
  id: number;
  name: string;
}

interface MovieInfo {
  adult: boolean;
  backdrop_path?: string;
  genres: GenresInfoProps[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface WatchProvidersProps {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

interface classProviderProps {
  buy?: WatchProvidersProps[];
  rent?: WatchProvidersProps[];
  flatrate?: WatchProvidersProps[];
  link: string;
}

const MediaInfo = () => {
  const [MovieInfo, setMovieInfo] = useState<MovieInfo>();
  const [WatchProviders, setWatchProviders] = useState<classProviderProps>();

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

      setMovieInfo(responseMovieInfo?.data);
      setWatchProviders(responseWatchProvider?.data?.results?.PT);

      console.log(responseMovieInfo?.data);
      console.log(responseWatchProvider?.data);
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
        <S.Titles>
          <S.Title
            level={1}
          >{`${MovieInfo?.title}, ${MovieInfo?.release_date}`}</S.Title>
          <S.Title level={5} opacity={0.7}>
            {MovieInfo?.original_title}
          </S.Title>
        </S.Titles>
        <S.Description>{MovieInfo?.overview}</S.Description>
        <S.GenresWrapper>
          <S.Title level={2}>Gêneros</S.Title>
          <S.GenresList>
            {MovieInfo?.genres?.map((genre: GenresInfoProps, index) => (
              <S.GenresItem key={index}>{genre.name}</S.GenresItem>
            ))}
          </S.GenresList>
        </S.GenresWrapper>
        <S.RatesWrapper>
          <S.Title level={3}>Avaliações</S.Title>
          <S.IMDbRate>
            <S.StarFullFillIcon />
            <S.NameRateWrapper>
              <S.Name>IMDb</S.Name>
              <S.RateInfo>{MovieInfo?.vote_average}</S.RateInfo>
            </S.NameRateWrapper>
          </S.IMDbRate>
        </S.RatesWrapper>
      </S.MidSide>
      <S.RightSide>
        <S.Title level={1}>Onde assistir</S.Title>
        {WatchProviders ? (
          <S.WhereToWatch>
            <S.WhereToWatchClass>
              <span>Streaming</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders?.flatrate?.map((item: any, index) => {
                  return (
                    <S.LogoProvider
                      key={index}
                      src={`${getImage}${item.logo_path}`}
                    />
                  );
                })}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
            <S.WhereToWatchClass>
              <span>Alugar</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders?.rent?.map((item: any, index) => {
                  return (
                    <S.LogoProvider
                      key={index}
                      src={`${getImage}${item.logo_path}`}
                    />
                  );
                })}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
            <S.WhereToWatchClass>
              <span>Comprar</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders?.buy?.map((item: any, index) => {
                  return (
                    <S.LogoProvider
                      key={index}
                      src={`${getImage}${item.logo_path}`}
                    />
                  );
                })}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
          </S.WhereToWatch>
        ) : (
          <S.Title level={3}>Não há plataforma assistir</S.Title>
        )}
        <S.IsAdult>
          <S.Title level={1}>Classificação</S.Title>
          {MovieInfo?.adult
            ? "Não recomendado para menores de 18 anos"
            : "Livre para todos os Públicos"}
        </S.IsAdult>
      </S.RightSide>
    </S.Container>
  );
};

export default MediaInfo;
