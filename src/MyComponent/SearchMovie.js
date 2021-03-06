import React, { useState } from 'react'
import { Movies } from './Movies';

export const SearchMovie = () => {
    //movies name stores in this.....
    const [movies, setMovies] = useState([]);
    //the query runs on the website to fetch the data to API.....
    const [query, setQuery] = useState('');
    const searchMovie = async (e) => {
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=true`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch (err) {
            console.log(err)
        }
    } //use onSubmit tag in react to send data other wise action not work for me.....
    return (
        <div className="container">
            <form onSubmit = {searchMovie}>
                    <div className="form-group py-4">
                        <label htmlFor="input">Enter Movie To Search</label>
                        <input type="text" className="form-control" id="input" placeholder="i.e. The Trip" value={query} onChange = {(e)=>{setQuery(e.target.value)}} />
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Search</button>
            </form>
            <div>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <Movies movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}
