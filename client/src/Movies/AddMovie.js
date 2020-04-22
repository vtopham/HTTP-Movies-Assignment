import React, { useState } from 'react'
import axios from 'axios'

const AddMovie = ({ getMovieList }) => {

    const initialMovie = {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: ""
    }

    const [newMovie, setNewMovie] = useState(initialMovie)

    const handleChange = event => {
        event.preventDefault();
        setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post(`http://localhost:5000/api/movies`,newMovie)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.response));
        
    }
    return(
        <>
        <h2>Add Movie Form</h2>
        <div className = "movie-card"> 
                <div>
                    <label htmlFor = "title" id = "title">Title: </label>
                    <input onChange = {handleChange} type = "text" name = "title" value = {newMovie.title}/>
                </div>
                <div>
                    <label htmlFor = "director" id = "director">Director: </label>
                    <input onChange = {handleChange} type = "text" name = "director" value = {newMovie.director}/>
                </div>
                <div>
                    <label htmlFor = "metascore" id = "metascore">Metascore: </label>
                    <input onChange = {handleChange} type = "text" name = "metascore" value = {newMovie.metascore}/>
                </div>
                <div>
                    
                <button onClick = {handleSubmit}>Submit Edit</button>
                    
                </div>
            </div>
        </>
    )
    }

export default AddMovie