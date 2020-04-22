import React, { useState } from 'react'
import axios from 'axios'
import { useParams, useHistory, Link } from "react-router-dom";

//This will add a movie to the movielist
const AddMovie = ({ getMovieList }) => {

    const history = useHistory()

    const initialMovie = {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: []
    }

    const [newMovie, setNewMovie] = useState(initialMovie) //set up state for our form using a blank state at first

    //this will update our state as changes are made in the form
    const handleChange = event => {
        event.preventDefault();
        setNewMovie({
            ...newMovie,
            [event.target.name]: event.target.value
        })

    }

    //this submits the new movie by making a post request, then refreshing the data, resetting the form and redirecting
    const handleSubmit = event => {
        event.preventDefault();
        axios
        .post(`http://localhost:5000/api/movies`,newMovie)
        .then((res) => {
            getMovieList()
            setNewMovie(initialMovie)
            history.push("/")
            
        })
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