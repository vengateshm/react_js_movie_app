import styled from 'styled-components';
import MovieComponent from './components/MovieComponent';
import MovieInfoComponent from './components/MovieInfoComponent';
import { useState } from 'react';
import axios from 'axios';
import { API_KEY } from './Constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
  justify-content: space-between;
`;

const AppName = styled.div`
  display: flex;
  flex-directions: row;
  align-items: center;
`;

const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: white;
  width:50%;
  border-radius: 6px;
  align-items: center;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 24px;
  justify-content: space-evenly;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

const App = () => {
  const [searchQuery, updateSearchQuery] = useState();
  const [timeOutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState();
  const [selectedMovie, updateSelectedMovie] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apiKey=${API_KEY}`);
    updateMovieList(response.data.Search);
  };

  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    updateSearchQuery(event.target.value);
    const timeOut = setTimeout(() => { fetchData(event.target.value) }, 500);
    updateTimeoutId(timeOut);
  };

  const onMovieSelect = (selected) => {
    updateSelectedMovie(selected);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/images/movie-icon.svg" />
          Movies App
        </AppName>
        <SearchBox>
          <SearchIcon src="/images/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>

      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie}
        onMovieSelect={onMovieSelect} />}

      <MovieListContainer>
        {movieList?.length ? movieList.map((movie, index) =>
          <MovieComponent
            key={index}
            movie={movie}
            onMovieSelect={onMovieSelect} />)
          : (
            <Placeholder src="/images/movie-icon.svg" />
          )}
      </MovieListContainer>
    </Container>
  );
};

export default App;