import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl } from '../../Constants/Constants'
function RowPost(props) {
    const [movie,setMovie] = useState([])
   
    useEffect(()=>{
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        })
    })


    return (
        
          
            <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
            {movie.map((obj)=>
                <img className={props.isSmall?'smallPoster':'poster'} alt='poster'src={`${imageUrl}${obj.backdrop_path}}`} />
            )}
                </div>

        </div>
            )
       
        
    
}

export default RowPost