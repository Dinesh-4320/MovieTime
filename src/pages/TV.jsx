import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import SelectGenre from "../components/SelectGenre";

export default function TV(){
  const genresLoaded = useSelector((state) => state.movietime.genresLoaded);
  const movies = useSelector((state) => state.movietime.movies);
  const genres = useSelector((state) => state.movietime.genres);
  const dispatch = useDispatch();
  const [isScrolled,setisScrolled] = useState(false);

  window.onscroll = () => {
    setisScrolled((window.pageYOffset === 0) ? false : true );
  }

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({type: "tv"}));
  }, [])

    return(
      <div>
        <Navbar isScrolled={isScrolled}/>
        <SelectGenre genres={genres} type="tv"/>
        <Slider movies={movies}/>
      </div> 
    );
} 