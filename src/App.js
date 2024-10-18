import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
//a170a6a4
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "https://www.omdbapi.com?apikey=a170a6a4";
const movie1 = {
    "Title": "Spiderman in Cannes",
    "Year": "2016",
    "imdbID": "tt5978586",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}
const App = ()=> {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchterm] = useState([]);
    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
    searchMovies("Spiderman")
    },[]);

    return(
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value = {searchTerm}
                    onChange = {(e)=> setSearchterm(e.target.value)}
                />
                <img
                src = {SearchIcon}
                alt = "search"
                onClick = {()=>searchMovies(searchTerm)}

                />

            </div>

            {
              movies?.length > 0
               ?  (
                <div className = "container">
                    {movies.map((movie)=> (
                        <MovieCard movie = {movie}/>
                    ))}
                </div>

               ) : (
                <div classNmae = "empty">
                    <h2>No movies found</h2>
                </div>
                    
               )
            }
            
        </div>
    );
}

export default App;
