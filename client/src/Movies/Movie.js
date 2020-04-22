import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory, Link, Redirect } from "react-router-dom";
import MovieCard from "./MovieCard";
import '98.css'

//The movie card
function Movie({ addToSavedList, getMovieList }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory();

  //function to reuse to call movie data
  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  //this saves the movie to the saved list
  const saveMovie = (event) => {
    event.preventDefault()
    addToSavedList(movie);
  };

  //this handles deletion of a movie by making a delete request, refreshing the history, then redirecting
  const handleDelete = event => {
    event.preventDefault()
    axios 
      .delete(`http://localhost:5000/api/movies/${params.id}`)
      .then(res => {
        getMovieList()
        history.push("/")
      })
      .catch((err) => console.log(err.response));
  }

  
  //we want to get the new list of movies whenever the id changes
  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />

      <button  onClick={saveMovie}>
        Save
      </button>
      <Link to = {`/update-movie/${params.id}`}>
        <button >
          Edit
        </button>
      </Link>
      
        <button onClick = {handleDelete}>
        <Link to = '/'>
          Delete!
          </Link>
        </button>
      
    </div>
  );
}

export default Movie;
