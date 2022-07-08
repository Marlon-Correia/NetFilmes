import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {MovieCard} from '../../components/MovieCard';

import * as C from './styled.js';

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;


const Search = () => {
    const [params] = useSearchParams();
    const [movie, setMovie] = useState([]);
    const query = params.get('q')

    useEffect(() => {
        const getSearch = async (url) => {
            const res = await fetch(url)
            const data = await res.json();
            setMovie(data.results);
        };
        const searchMovieUrl = `${searchUrl}?${apiKey}&query=${query}`
        getSearch(searchMovieUrl)
    }, [query, movie]);

    return ( 
        <C.Container>
            <h2>
                Resultados para: <C.Span>{query}</C.Span>
            </h2>
            <C.ContainerMovies>
                { movie.length === 0 && <C.H1>Carregando...</C.H1> }
                { movie.length > 0 && 
                    movie.map( (item) => <MovieCard key={movie.id} url={imageUrl} movie={item} /> ) 
                }
            </C.ContainerMovies>
        </C.Container>
    );
}

export default Search;