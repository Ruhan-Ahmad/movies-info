import React from 'react'

export const Movies = (props) => {
    let cardStyle = {
        width: '20rem'
    }
    const { movie } = props
    return (
        <div className="card container" style={cardStyle}>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " Poster"}
                key={movie.id}
            />
            <div class="card-body">
                <h5 class="card-title">{movie.title}</h5>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p class="card-text" id="desc">{movie.overview}</p>
            </div>
        </div>
    )
}
