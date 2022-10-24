// import { Container } from './styles';

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setSearch(location.state.search);
    }
  }, []);

  return (
    <div>
      <h1>Search Page</h1>
    </div>
  );
};

export default Search;
