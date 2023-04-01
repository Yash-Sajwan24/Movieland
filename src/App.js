import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import Moviecard from './Moviecard';

//2f0d645c

const API_URL = 'https://www.omdbapi.com?apikey=2f0d645c';
// const movie1 = {
//   "Title": "Superman, Spiderman or Batman",
//   "Year": "2011",
//   "imdbID": "tt2084949",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
// }


const App = () =>{

  const [movies, setMovies] = useState([]);
  const [searchTerm , setSearchTerm] = useState('');

  const searchMoveies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMoveies('spiderman');
  }, []);

  return (
    <div className='app'>
      <h1> MovieLand</h1>
      <div className='search'>
        <input
        placeholder='search for movies'
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}
        >
        </input>
        <img src={SearchIcon} alt='search' 
        onClick={(e) => {searchMoveies(searchTerm)}}
        />
      </div>

      {
        movies?.length>0
        ?(
          <div className='container'>
            {movies.map((movie) => (
              <Moviecard movie1={movie}/>
            ))}
          </div>
        ):
        (
          <div className='empty'>
            <h2>No movies found.</h2>
          </div>
        )
      }

      
    </div>
    
  )
}

export default App;