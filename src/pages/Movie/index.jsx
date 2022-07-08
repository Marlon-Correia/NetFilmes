import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as C from './styled.js'
import {
    BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill,
} from 'react-icons/bs' 

import { MovieCard } from '../../components/MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        const getMovie = async (url) => {
            const res = await fetch(url)
            const data = await res.json();
            setMovie(data);
        }
        const searchMovieUrl = `${moviesUrl}${id}?${apiKey}`;
        getMovie(searchMovieUrl)
    }, [])

    const formatCurrentDolar = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    };

    return ( 
        <C.MoviePage>
            {movie && 
            <>
                <MovieCard movie={movie} showLink={false}  />
                <C.TagLine>{movie.tagline}</C.TagLine>
                <C.Info>
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{formatCurrentDolar(movie.budget)}</p>
                </C.Info>
                <C.Info>
                    <h3>
                        <BsGraphUp /> Receita:
                    </h3>
                    <p>{formatCurrentDolar(movie.revenue)}</p>
                </C.Info>
                <C.Info>
                    <h3>
                        <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </C.Info>
                <C.Info>
                    <h3>
                        <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </C.Info>
            </>
            }
        </C.MoviePage>
    );
}

export default Movie;