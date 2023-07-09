import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_KEY, TMDB_URL } from "../utils/constants";
import axios from "axios";
import "./player.css";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { BsArrowLeft } from "react-icons/bs";

export default function Player(){
    const location=useLocation();
    const id= location.state.id;
    const [videokey,setvideokey]=useState();
    const video = async() => {
            const {data: {results: {0: {key}}}} =await axios.get(`${TMDB_URL}/movie/${id}/videos?api_key=${API_KEY}`);  
            return key;
        }
    const navigate = useNavigate();
    function trailer(){ Promise.resolve(video()).then(function(value){
        setvideokey(value);
       })    
    }
    trailer();

    return(
        <div className="react-player">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videokey}`} controls={true} height="100vh" width="100vw"/>               
                <BsArrowLeft onClick={() => navigate(-1)}/>
        </div>
    );
}