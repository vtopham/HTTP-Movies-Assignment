import React, { useState, useEffect } from 'react'
import { useParams} from "react-router-dom";
import MovieList from './MovieList';
import axios from 'axios'


const UpdateMovie = props => {

    const params = useParams()
    // const [movie, setMovie] = {}

    const initialMovie = {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: ""
    }

    const [movie, setMovie] = useState(initialMovie)

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/movies/${params.id}`)
          .then((res) => setMovie(res.data))
          .catch((err) => console.log(err.response));
    },[])


    const handleChange = event => {
        event.preventDefault();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
        
    }

    const handleSubmit = event => {
        event.preventDefault()
        axios
            .put(`http://localhost:5000/api/movies/${params.id}`,movie)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }


    
    
    if (!movie) {
        return <h2>Loading Movie Data!</h2>
    }
    return (
        <>
            <h2>Edit Movie</h2>
            <div className = "movie-card"> 
                <div>
                    <label htmlFor = "title" id = "title">Title: </label>
                    <input onChange = {handleChange} type = "text" name = "title" value = {movie.title}/>
                </div>
                <div>
                    <label htmlFor = "director" id = "director">Director: </label>
                    <input onChange = {handleChange} type = "text" name = "director" value = {movie.director}/>
                </div>
                <div>
                    <label htmlFor = "metascore" id = "metascore">Metascore: </label>
                    <input onChange = {handleChange} type = "text" name = "metascore" value = {movie.metascore}/>
                </div>
                <div>
                    <button onClick = {handleSubmit}>Submit Edit</button>
                </div>
            </div>
            
            
        </>
    )
}

export default UpdateMovie