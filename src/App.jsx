import React, { useEffect, useState } from 'react';
import './App.css';
import ApiMovies from './ApiMovies';
import MovieList from './components/MovieList';

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => { 
    const loadAll = async () => {
      let list = await ApiMovies.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
      <div className="page">
          <section>
              {movieList && movieList.map((item, key) => (
                  <MovieList key={key} title={item.title} items={item.items}/>
                ))}
          </section>
        </div>
  )
}