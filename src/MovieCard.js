import React from "react";

const MovieCard = ({movie}) => {
    return (

        <div className='movie'>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://showsupply.com/media/catalog/product/cache/3c90ba4d4df056e77682d268a692a5c0/c/l/clear-com-placeholder.png'} atl={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;