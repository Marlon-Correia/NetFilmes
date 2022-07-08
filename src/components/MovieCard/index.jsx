import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

import * as C from './styled.jsx'
const imageUrl = import.meta.env.VITE_IMG;

export const MovieCard = ({ key, movie, showLink = true }) => {
    return(
        <C.MovieCard className="movie-card">
            <img src={imageUrl+movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p style={{color: '#fff'}}>
                <FaStar color="#f7d354" /> {movie.vote_average}
            </p>
            {showLink && 
                <Link to={`/movie/${movie.id}`} className="show-link">
                    Sobre
                </Link>
            }
        </C.MovieCard>
    )
}