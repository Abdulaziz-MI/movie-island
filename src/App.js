import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import "./App.css";
import searchIcon from './search.svg'
import MovieCard from './movieCard.jsx'

// ee9dcaa1
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=ee9dcaa1'


const App = () => {

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState([''])

    useEffect(() => {
        searchMovies('Batman')
    }, []);


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
    }


    return (

        <div className='app'>
            <h1>Movie Island</h1>


            <div className="search">
                <input
                    value={searchTerm}
                    placeholder='Search for movies'
                    onChange={(e) => setSearchTerm(e.target.value)}
                ></input>

                <img
                    src={searchIcon}
                    alt='search'
                    onClick={() => searchMovies(searchTerm)}></img>
            </div>

            {movies?.length > 0 ?
                (<div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>) :
                (<div className='empty'>
                    <h2> No Movies Found</h2>
                </div>)}

        </div>
    )
}










export default App