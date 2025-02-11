import React, { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const API_URL = 'http://www.omdbapi.com?apikey=5815384'

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYWNiMmNlNmQtZTI2MS00MzAxLTgxM2QtNDY3ZGQxNDMwZDgzXkEyXkFqcGc@._V1_SX300.jpg"
// }
const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        searchMovies('Batman')
    }, [])

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)

    }

    
    return (
        <div className='app'>

            <h1>MovieLand</h1>

            <div className='search'>

                    <input
                        placeholder='Search for movies'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <img 
                        src={SearchIcon}
                        alt='search'
                        onClick={() => searchMovies(searchTerm)}
                    />

            </div>

                    {
                        movies?.length > 0
                        
                        ? 

                        (

                            <div className='container'>
                                {movies.map((movie) => 
                                (<MovieCard key={movie.imdbID} movie={movie} />))}

                            </div>

                        ) : (
                                <div className='empty'>
                                    <h2>No movies found</h2>
                                </div>
                            )
                    }

                {/* 
                    Dynamic block of code using parentheses and check if movies 
                    ?.length is greater than zero. Then we want to render our movie card.
                    Else, if that is not the case, if there is no movies, we will render something
                */}

                 

            

        </div>
    )
}

export default App;
