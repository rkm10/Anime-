import React from 'react';
import { Link } from 'react-router-dom';

export default function AnimeList({ apiData }) {

      return (
            <>
                  {
                        apiData.map((data, index) => {
                              return (
                                    <div className="card w-96 glass m-3 group/raj" key={data.mal_id}>
                                          <figure>
                                                <Link to={`/animedetails/${data.mal_id}`}>
                                                      <img src={apiData[index].images.jpg.image_url} alt="poster" 
                                                      className='group-hover/raj:transition duration-700 ease-in-out group-hover/raj:scale-110 transition-shadow'/>
                                                </Link>
                                          </figure>
                                          <div className='card-body'>
                                                <h1 className="card-title"><label>Name:-</label> {apiData[index].title} {apiData[index].name}  </h1>
                                                <p className="CardContent"><label>Duration:-</label> {apiData[index].duration} {apiData[index].nicknames} </p>
                                                <p className="CardContent"><label>Episodes :-</label> {apiData[index].episodes}  </p>
                                                <p className="CardContent"><label>Year of release:-</label> {apiData[index].year}</p>
                                          </div>
                                    </div>
                              )
                        })
                  }
            </>
      );
}
