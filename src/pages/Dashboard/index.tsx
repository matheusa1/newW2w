import { useEffect, useState } from "react";
import Axios from "axios";

import Title from "../../components/Title";

import * as S from "./styles";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Dashboard = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [topMoviesPage, SetTopMoviesPage] = useState(1);
  const [topMoviesTotalPages, SetTopMoviesTotalPages] = useState();
  const [topMoviesTotalResults, SetTopMoviesTotalResults] = useState();

  const getTopMovies = async () => {
    try {
      const response = await Axios.get(`${moviesURL}top_rated?${apiKey}`);
      setTopMovies(response.data.results);
      SetTopMoviesPage(response.data.page);
      SetTopMoviesTotalPages(response.data.total_pages);
      SetTopMoviesTotalResults(response.data.total_results);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopMovies();
  }, [topMoviesPage]);

  return (
    <S.Container>
      <S.Text>O que está procurando?</S.Text>
      <S.InputWrapper>
        <S.InputHome placeholder="Filme, série, anime ..." />
        <S.InputIcon />
      </S.InputWrapper>
      <Title px="2.5rem" text="DESTAQUES" />
      <S.Carousel></S.Carousel>
    </S.Container>
  );
};

export default Dashboard;
