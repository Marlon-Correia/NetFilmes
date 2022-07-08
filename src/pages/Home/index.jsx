import React, { useEffect, useState } from 'react';
import { MovieCard } from '../../components/MovieCard';

import * as C from './styled.js'

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Home = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getTopRatedMovies = async (url) => {
            const res = await fetch(url)
            const data = await res.json();
            setMovie(data.results);
        };
        const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    return ( 
        <C.Container>
            <h2>Melhores Filmes</h2>
            <C.ContainerMovies>
                { movie.length === 0 && <C.H1>Carregando...</C.H1> }
                { movie.length > 0 && movie.map( (item) => <MovieCard key={movie.id} url={imageUrl} movie={item} /> ) }
            </C.ContainerMovies>
        </C.Container>
    );
}

export default Home;