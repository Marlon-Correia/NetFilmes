import { Link, useNavigate } from "react-router-dom"
import {AiOutlineQq} from 'react-icons/ai';
import {BiSearchAlt2} from 'react-icons/bi';

import * as C from './styled.js'
import { useState } from "react";

export const NavBar = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(!search) return alert("Pesquisa invalída.")

        navigate(`/search?q=${search}`);
        setSearch("")
    };

    return(
        <C.NavBar id="navbar">
            <h2 className="nav-items">
                <Link to='/'><AiOutlineQq size={'30px'} /> NetFilmes</Link>
            </h2>
            <C.Form onSubmit={handleSearch} className="nav-items">
                <C.Input 
                    type="text" 
                    placeholder="Busque um filme"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <C.Button type="submit">
                    <BiSearchAlt2 size={'18px'} />
                </C.Button>
            </C.Form>
        </C.NavBar>
    )
}