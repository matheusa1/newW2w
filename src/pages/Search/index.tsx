import Axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import * as S from "./styles";
import PaginationWrapper from "../../components/Pagination";

import ImageNotFound from "../../assets/image-not-found-scaled.png";

const moviesURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const getImage = import.meta.env.VITE_IMG;
const TvURL = import.meta.env.VITE_SEARCH_TV;

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

interface TvInfo {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

const Search = () => {
  const [buttonSelect, setButtonSelect] = useState(1);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<MovieInfo[]>([]);
  const [resultsTv, setResultsTv] = useState<TvInfo[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const location = useLocation();

  const requestSearch = async () => {
    try {
      if (buttonSelect === 1) {
        let response;
        search === "" || search === undefined
          ? (response = await Axios.get(
              `${moviesURL}?${apiKey}&language=pt-BR&query=a&page=${page}`
            ))
          : (response = await Axios.get(
              `${moviesURL}?${apiKey}&language=pt-BR&query=${search}&page=${page}`
            ));

        setResults(response.data.results);
        setTotalResults(response.data.total_results);
      }
      if (buttonSelect === 2) {
        let response;
        search === "" || search === undefined
          ? (response = await Axios.get(
              `${TvURL}?${apiKey}&language=pt-BR&query=a&page=${page}`
            ))
          : (response = await Axios.get(
              `${TvURL}?${apiKey}&language=pt-BR&query=${search}&page=${page}`
            ));

        setResultsTv(response.data.results);
        setTotalResults(response.data.total_results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setResults([]);
    setResultsTv([]);
    requestSearch();
    window.scrollTo(0, 0);
  }, [search, page, buttonSelect]);

  useEffect(() => {
    if (location.state) {
      setSearch(location.state.search);
    }
  }, []);

  return (
    <S.Container>
      <S.Buttons>
        <S.Button
          onClick={() => setButtonSelect(1)}
          active={buttonSelect === 1 ? true : false}
        >
          Filmes
        </S.Button>
        <S.Button
          onClick={() => setButtonSelect(2)}
          active={buttonSelect === 2 ? true : false}
        >
          S??ries
        </S.Button>
      </S.Buttons>
      <S.InputWrapper>
        <S.Text>O que est?? procurando?</S.Text>
        <S.Debounce
          debounceTimeout={500}
          placeholder="Filme, s??rie, anime, plataforma"
          value={search}
          onChange={(event: any) => setSearch(event.target.value)}
          element={S.Input}
        />
      </S.InputWrapper>
      <S.Results>
        {buttonSelect === 1 ? (
          results ? (
            results.map((movie) => (
              <S.MovieCard to={`/media/${movie.id}`} key={movie.id}>
                <S.MovieImage
                  alt={`${movie.title} poster`}
                  src={
                    movie?.poster_path === null ||
                    movie.poster_path === undefined
                      ? ImageNotFound
                      : `${getImage}${movie.poster_path}`
                  }
                />
                <S.MovieTitle>{movie.title}</S.MovieTitle>
              </S.MovieCard>
            ))
          ) : (
            <S.LoadingContainer>
              <S.LoadingWrapper>
                <S.LoadingComponent
                  type={"bubbles"}
                  color={"#FFFFFF"}
                  height={"100%"}
                  width={"100%"}
                />
                <S.LoadingLabel>Carregando...</S.LoadingLabel>
              </S.LoadingWrapper>
            </S.LoadingContainer>
          )
        ) : resultsTv ? (
          resultsTv.map((tv) => (
            <S.MovieCard to={`/tv/${tv.id}`} key={tv.id}>
              <S.MovieImage
                alt={`${tv.name} poster`}
                src={
                  tv?.poster_path === null || tv.poster_path === undefined
                    ? ImageNotFound
                    : `${getImage}${tv.poster_path}`
                }
              />
              <S.MovieTitle>{tv.name}</S.MovieTitle>
            </S.MovieCard>
          ))
        ) : (
          <S.LoadingContainer>
            <S.LoadingWrapper>
              <S.LoadingComponent
                type={"bubbles"}
                color={"#FFFFFF"}
                height={"100%"}
                width={"100%"}
              />
              <S.LoadingLabel>Carregando...</S.LoadingLabel>
            </S.LoadingWrapper>
          </S.LoadingContainer>
        )}
      </S.Results>
      {(results || resultsTv) && (
        <PaginationWrapper
          defaultCurrent={1}
          total={totalResults}
          showSizeChanger={false}
          defaultPageSize={20}
          setPage={(page) => setPage(page)}
        />
      )}
    </S.Container>
  );
};

export default Search;
