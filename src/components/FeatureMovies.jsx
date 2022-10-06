import React from "react";
import './FeatureMoveis.css';

export default ({item}) => {

    let getYear = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }
    return (
        <section className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured-horizontal">
                    <div className="featured--title">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average} pontos</div>
                        <div className="featured--year">{getYear.getFullYear()}</div>
                        <div className="featured--seasons">
                            {item.number_of_seasons} Temporada
                            {item.number_of_seasons !== 1 ? 's' : ''}
                        </div>
                    </div>
                    <div className="featured--description">{item.overview}</div>
                    <div className="featured--buttons">
                        <a className="featured--watch" href={`/watch/${item.id}`}>Assistir</a>
                        <a className="featured--myList" href={`/list/add/${item.id}`}>+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gênero: </strong> {genres.join(', ')}</div>
                </div>                
            </div>
        </section>
    )
}