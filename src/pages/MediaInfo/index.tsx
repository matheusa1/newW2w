import { useParams } from "react-router";
import StarRatings from "react-star-ratings";
import Axios from "axios";
import { useEffect, useState } from "react";

import * as S from "./styles";
import ImageNotFound from "../../assets/image-not-found-scaled.png";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const getImage = import.meta.env.VITE_IMG;
const TvURL = import.meta.env.VITE_TV;

interface GenresInfoProps {
  id: number;
  name: string;
}

interface EpisodeInfoProps {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface SeasonInfoProps {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
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

interface TvInfo {
  adult: boolean;
  backdrop_path: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: GenresInfoProps[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeInfoProps;
  name: string;
  next_episode_to_air?: number;
  number_of_episodes: number;
  number_of_seasons: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  seasons: SeasonInfoProps[];
  status: string;
  tagline: string;
  type: string;
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
  const [TvInfo, setTvInfo] = useState<TvInfo>();
  const [WatchProviders, setWatchProviders] = useState<classProviderProps>();
  const [Rate, setRate] = useState<number>(0);
  const [SimilarMovies, setSimilarMovies] = useState<MovieInfo[]>([]);
  const [SimilarTv, setSimilarTv] = useState<TvInfo[]>([]);
  const [Liked, setLiked] = useState<boolean>(false);

  const params = useParams();
  const { id } = params;
  const { media } = params;

  const getMovieInfo = async () => {
    try {
      let response;
      let responseWatchProvider;
      let responseSimilarMovies;

      if (media === "media") {
        response = await Axios.get(
          `${moviesURL}${id}?${apiKey}&language=pt-BR`
        );
        responseWatchProvider = await Axios.get(
          `${moviesURL}${id}/watch/providers?${apiKey}&language=pt-BR`
        );
        responseSimilarMovies = await Axios.get(
          `${moviesURL}${id}/similar?${apiKey}&language=pt-BR`
        );

        setMovieInfo(response.data);
        setWatchProviders(responseWatchProvider.data.results.BR);
        setSimilarMovies(responseSimilarMovies.data.results);

        console.log(responseWatchProvider.data.results.BR);
        console.log(response.data);
      } else {
        response = await Axios.get(`${TvURL}${id}?${apiKey}&language=pt-BR`);
        responseWatchProvider = await Axios.get(
          `${TvURL}${id}/watch/providers?${apiKey}&language=pt-BR`
        );
        responseSimilarMovies = await Axios.get(
          `${TvURL}${id}/similar?${apiKey}&language=pt-BR`
        );

        setTvInfo(response.data);
        setWatchProviders(responseWatchProvider.data.results.BR);
        setSimilarTv(responseSimilarMovies.data.results);

        console.log(responseWatchProvider.data.results.BR);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeRate = (newRating: number) => {
    setRate(newRating);
  };

  useEffect(() => {
    getMovieInfo();
  }, [params]);

  return (
    <S.Container>
      <S.LeftSide>
        <S.PosterImage
          src={
            media === "media"
              ? MovieInfo?.poster_path === null ||
                MovieInfo?.poster_path === undefined ||
                MovieInfo?.poster_path === "" ||
                MovieInfo?.poster_path === "null"
                ? ImageNotFound
                : `${getImage}${MovieInfo?.poster_path}`
              : TvInfo?.poster_path === null ||
                TvInfo?.poster_path === undefined ||
                TvInfo?.poster_path === "" ||
                TvInfo?.poster_path === "null"
              ? ImageNotFound
              : `${getImage}${TvInfo?.poster_path}`
          }
        />
        <S.RateWrapper>
          <S.Title level={1}>Avaliar</S.Title>
          <StarRatings
            starDimension="1.5rem"
            rating={Rate}
            changeRating={changeRate}
            numberOfStars={5}
            starSpacing="15px"
            starRatedColor="#FFD700"
            starHoverColor="#FFD700"
            starEmptyColor="#9e8600"
          />
        </S.RateWrapper>
        <S.LikedWrapper>
          <S.Title level={1}>Gostei</S.Title>
          <S.HearthIcon liked={Liked} onClick={() => setLiked(!Liked)} />
        </S.LikedWrapper>
      </S.LeftSide>
      <S.MidSide>
        <S.Titles>
          <S.Title level={1}>{`${
            media === "media" ? MovieInfo?.title : TvInfo?.name
          }, ${
            media === "media"
              ? MovieInfo?.release_date.replace("-", "/")
              : `${TvInfo?.first_air_date.replace(
                  /-/g,
                  "/"
                )} ~ ${TvInfo?.last_air_date.replace(/-/g, "/")}`
          }`}</S.Title>
          <S.Title level={5} opacity={0.7}>
            {media === "media"
              ? MovieInfo?.original_title
              : TvInfo?.original_name}
          </S.Title>
        </S.Titles>
        <S.Description>
          {media === "media" ? MovieInfo?.overview : TvInfo?.overview}
        </S.Description>
        <S.GenresWrapper>
          <S.Title level={2}>Gêneros</S.Title>
          <S.GenresList>
            {media === "media"
              ? MovieInfo?.genres?.map((genre: GenresInfoProps, index) => (
                  <S.GenresItem key={index}>{genre.name}</S.GenresItem>
                ))
              : TvInfo?.genres?.map((genre: GenresInfoProps, index) => (
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
              <S.RateInfo>
                {media === "media"
                  ? MovieInfo?.vote_average
                  : TvInfo?.vote_average}
              </S.RateInfo>
            </S.NameRateWrapper>
          </S.IMDbRate>
        </S.RatesWrapper>
        {media === "tv" && (
          <>
            <S.TvInfo>
              <S.Title level={3}>Informações</S.Title>
              <S.TvInfoWrapper>
                <S.TvInfoItem>
                  <S.TvInfoTitle>Temporadas</S.TvInfoTitle>
                  <S.TvInfoValue>{TvInfo?.number_of_seasons}</S.TvInfoValue>
                </S.TvInfoItem>
                <S.TvInfoItem>
                  <S.TvInfoTitle>Episódios</S.TvInfoTitle>
                  <S.TvInfoValue>{TvInfo?.number_of_episodes}</S.TvInfoValue>
                </S.TvInfoItem>
                <S.TvInfoItem>
                  <S.TvInfoTitle>Duração média dos episódios</S.TvInfoTitle>
                  <S.TvInfoValue>
                    {TvInfo?.episode_run_time?.map((item, index) => {
                      return `${item}${
                        index === 0 && TvInfo.episode_run_time.length > 1
                          ? ":"
                          : ""
                      }`;
                    })}{" "}
                    min
                  </S.TvInfoValue>
                </S.TvInfoItem>
              </S.TvInfoWrapper>
            </S.TvInfo>

            <S.SeasonsWrapper>
              <S.Title level={3}>Temporadas</S.Title>
              <S.SeasonsList>
                {TvInfo?.seasons?.map((season, index) => (
                  <S.SeasonsItem key={index}>
                    <S.SeasonImage
                      src={
                        season.poster_path === null ||
                        season.poster_path === undefined ||
                        season.poster_path === "" ||
                        season.poster_path === "null"
                          ? ImageNotFound
                          : `${getImage}${season.poster_path}`
                      }
                    />
                    <S.SeasonInfo>
                      <S.SeasonName>{season.name}</S.SeasonName>
                      <S.SeasonDate>
                        {season.air_date
                          ? season?.air_date?.replace(/-/g, "/")
                          : ""}
                      </S.SeasonDate>
                      <S.SeasonEpisodes>
                        {season.episode_count} episódios
                      </S.SeasonEpisodes>
                    </S.SeasonInfo>
                  </S.SeasonsItem>
                ))}
              </S.SeasonsList>
            </S.SeasonsWrapper>
          </>
        )}
        <S.SimilarMoviesWrapper>
          <S.Title level={3}>
            {media === "media" ? "Filmes" : "Séries"} Similares
          </S.Title>
          <S.SimilarMoviesList>
            {media === "media"
              ? SimilarMovies?.map((movie, index) => (
                  <S.SimilarMoviesItem key={index} to={`/media}/${movie.id}`}>
                    <S.SimilarMoviesPoster
                      src={
                        movie?.poster_path === null ||
                        movie?.poster_path === undefined ||
                        movie?.poster_path === "" ||
                        movie?.poster_path === "null"
                          ? ImageNotFound
                          : `${getImage}${movie?.poster_path}`
                      }
                    />
                    <S.SimilarMoviesTitle>{movie.title}</S.SimilarMoviesTitle>
                  </S.SimilarMoviesItem>
                ))
              : SimilarTv?.map((tv, index) => (
                  <S.SimilarMoviesItem key={index} to={`/tv/${tv.id}`}>
                    <S.SimilarMoviesPoster
                      src={
                        tv?.poster_path === null ||
                        tv?.poster_path === undefined ||
                        tv?.poster_path === "" ||
                        tv?.poster_path === "null"
                          ? ImageNotFound
                          : `${getImage}${tv?.poster_path}`
                      }
                    />
                    <S.SimilarMoviesTitle>{tv.name}</S.SimilarMoviesTitle>
                  </S.SimilarMoviesItem>
                ))}
          </S.SimilarMoviesList>
        </S.SimilarMoviesWrapper>
      </S.MidSide>
      <S.RightSide>
        <S.Title level={1}>Onde assistir</S.Title>
        {WatchProviders ? (
          <S.WhereToWatch>
            <S.WhereToWatchClass>
              <span>Streaming</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders.flatrate ? (
                  WatchProviders?.flatrate?.map((item: any, index) => {
                    return (
                      <S.LogoProvider
                        key={index}
                        src={`${getImage}${item.logo_path}`}
                      />
                    );
                  })
                ) : (
                  <S.Title level={4}>Não disponível</S.Title>
                )}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
            <S.WhereToWatchClass>
              <span>Alugar</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders.rent ? (
                  WatchProviders?.rent?.map((item: any, index) => {
                    return (
                      <S.LogoProvider
                        key={index}
                        src={`${getImage}${item.logo_path}`}
                      />
                    );
                  })
                ) : (
                  <S.Title level={4}>Não disponível</S.Title>
                )}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
            <S.WhereToWatchClass>
              <span>Comprar</span>
              <S.WhereToWatchProvidersLogo>
                {WatchProviders.buy ? (
                  WatchProviders?.buy?.map((item: any, index) => {
                    return (
                      <S.LogoProvider
                        key={index}
                        src={`${getImage}${item.logo_path}`}
                      />
                    );
                  })
                ) : (
                  <S.Title level={4}>Não disponível</S.Title>
                )}
              </S.WhereToWatchProvidersLogo>
            </S.WhereToWatchClass>
          </S.WhereToWatch>
        ) : (
          <S.Title level={3}>Não há plataforma para se assistir</S.Title>
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
