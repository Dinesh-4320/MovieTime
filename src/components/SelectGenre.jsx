import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchDataByGenre } from "../store";

export default function SelectGenre({genres, type}){
    const genresLoaded = useSelector((state) => state.movietime.genresLoaded);
    const dispatch = useDispatch();

    return(
        <div className="select" >
            <select onChange={e=> {
            dispatch(fetchDataByGenre({genre: e.target.value, type}))
        }}>
            {
            genres.map((genre) => {
                return(
                    <option value={genre.id} key={genre.id}>{genre.name}</option>
                    )
                })
            }
            </select>
        </div>
    )
}