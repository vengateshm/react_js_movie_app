import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as Constants from '../Constants';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 30px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
`;

const CoverImage = styled.img`
    object-fit: cover;
    height: 352px;
`;

const MovieName = styled.span`
    fomt-size: 18px;
    font-weight: 600;
    color: black;
    margin: 15px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

const MovieInfo = styled.span`
    fomt-size: 16px;
    font-weight: 500;
    color: black;
    overflow: hidden;
    margin: 4px 0;
    text-transform: capitalize;
    text-overflow: ellipsis;
    & span {
        opacity: 0.5;
    }
`;

const Close = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: black;
    background: lightgray;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.8;
`;

const MovieInfoComponent = (props) => {
    const { selectedMovie } = props;
    const [movieInfo, setMovieInfo] = useState();

    useEffect(() => {
        axios
            .get(`https://www.omdbapi.com/?i=${selectedMovie}&apiKey=${Constants.API_KEY}`)
            .then((response) => {
                setMovieInfo(response.data);
            });
    }, [selectedMovie]);

    return (
        <Container>
            {movieInfo ? <>
                <CoverImage src={movieInfo?.Poster} />
                <InfoColumn>
                    <MovieName>Movie: {movieInfo?.Title}</MovieName>
                    <MovieInfo>IMDB Rating : <span>{movieInfo?.imdbRating}</span></MovieInfo>
                    <MovieInfo>Language : <span>{movieInfo?.Language}</span></MovieInfo>
                    <MovieInfo>Rated : <span>{movieInfo?.Rated}</span></MovieInfo>
                    <MovieInfo>Released : <span>{movieInfo?.Released}</span></MovieInfo>
                    <MovieInfo>Runtime : <span>{movieInfo?.Runtime}</span></MovieInfo>
                    <MovieInfo>Genre : <span>{movieInfo?.Genre}</span></MovieInfo>
                    <MovieInfo>Director : <span>{movieInfo?.Director}</span></MovieInfo>
                    <MovieInfo>Actors : <span>{movieInfo?.Actors}</span></MovieInfo>
                    <MovieInfo>Plot : <span>{movieInfo?.Plot}</span></MovieInfo>
                </InfoColumn>
                <Close onClick={()=> props.onMovieSelect()}>x</Close>
            </> : "Loading..."}
        </Container>
    )
}

export default MovieInfoComponent;