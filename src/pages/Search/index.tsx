import * as S from "./styles";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";

const moviesURL = import.meta.env.VITE_SEARCH;
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

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<MovieInfo[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();

  const requestSearch = async () => {
    try {
      let response;

      search === "" || search === undefined
        ? (response = await Axios.get(
            `${moviesURL}?${apiKey}&language=pt-BR&query=a`
          ))
        : (response = await Axios.get(
            `${moviesURL}?${apiKey}&language=pt-BR&query=${search}`
          ));

      setResults(response.data.results);
      setTotalPages(response.data.total_pages);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestSearch();
  }, [search]);

  useEffect(() => {
    if (location.state) {
      setSearch(location.state.search);
    }
  }, []);

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Text>O que está procurando?</S.Text>
        <S.Debounce
          debounceTimeout={500}
          placeholder="Filme, série, anime, plataforma"
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
          element={S.Input}
        />
      </S.InputWrapper>

      <S.Results>
        {results.map((movie) => (
          <S.MovieCard to={`/media/${movie.id}`} key={movie.id}>
            <S.MovieImage
              alt={`${movie.title} poster`}
              src={`${getImage}${movie.poster_path}`}
            />
            <S.MovieTitle>{movie.title}</S.MovieTitle>
          </S.MovieCard>
        ))}
      </S.Results>
    </S.Container>
  );
};

export default Search;
