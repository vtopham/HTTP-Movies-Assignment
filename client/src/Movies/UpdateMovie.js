import React, { useState, useEffect } from 'react'
import { useParams, useHistory, Link } from "react-router-dom";
import MovieList from './MovieList';
import axios from 'axios'

//This allows you to edit a movie's information
const UpdateMovie = props => {

    const history = useHistory()
    const params = useParams()

    const initialMovie = {
        id: "",
        title: "",
        director: "",
        metascore: "",
        stars: ""
    }

    const [movie, setMovie] = useState(initialMovie) //set up initial state using a blank slate for the movie info

    //at render, request the movie data and set the state with that data
    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/movies/${params.id}`)
          .then((res) => setMovie(res.data))
          .catch((err) => console.log(err.response));
    },[])

    //this allows the user's changes in the form to be reflected in the state
    const handleChange = event => {
        event.preventDefault();
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
        
    }   

    //handles submission by using a pust request, then refreshing the data and pushing to the card for that movie so you can see your changes
    const handleSubmit = event => {
        event.preventDefault()
        setMovie(initialMovie)
        axios
            .put(`http://localhost:5000/api/movies/${params.id}`,movie)
            .then(res => {
                props.getMovieList()
                history.push(`/movies/${params.id}`)})
            .catch(err => console.log(err))
        
    }



    
    //loading message if movie hasn't been fetched by the api yet
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