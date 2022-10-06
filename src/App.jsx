import React, { useEffect, useState } from 'react';
import './App.css';
import ApiMovies from './ApiMovies';
import MovieList from './components/MovieList';
import FeatureMovies from './components/FeatureMovies';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => { 
    const loadAll = async () => {
      let list = await ApiMovies.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await ApiMovies.getMovieInfor(chosen.id, 'tv'); 
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
      <div className="page">
        {featureData && 
           <FeatureMovies item={featureData}/>
        }
          <section className='list'>
              {movieList && movieList.map((item, key) => (
                  <MovieList key={key} title={item.title} items={item.items}/>
                ))}
          </section>
        </div>
  )
}