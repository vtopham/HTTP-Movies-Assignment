import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import AddMovie from './Movies/AddMovie'
import UpdateMovie from './Movies/UpdateMovie'
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  //get our initial list of movies from the api
  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  //allows us to add to the saved list
  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  //at first render, get the list of movies
  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} getMovieList = {getMovieList} />
      </Route>

      <Route path = "/update-movie/:id">
        <UpdateMovie getMovieList = {getMovieList}/>
      </Route>

      <Route path = "/add-movie">
        <AddMovie getMovieList = {getMovieList}/>
      </Route>
    </>
  );
};

export default App;
