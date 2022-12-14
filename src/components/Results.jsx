import React, {useState, useEffect} from 'react';
import VideoCard from './VideoCard.jsx';
import './Results.css'
import axios from './axios'
import requests from './request'
import FlipMove from 'react-flip-move'


const Results = ({selectedOption}) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
         const request = await axios.get(selectedOption)
         setMovies(request.data.results)
         return request
    }

    fetchData()
  }, [selectedOption]);

  
    return (
      <div className='results'>
        <FlipMove>
            {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
        </FlipMove>
           
        </div>
    );}


export default Results;
