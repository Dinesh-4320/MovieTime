import React, { useState } from "react";
import "./Card.css"
import { useNavigate } from "react-router-dom";
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri";
import {AiOutlinePlusCircle} from "react-icons/ai";


export default React.memo(function Card({movieData}) {

    const navigate=useNavigate();
    const id=movieData.id;
    const [Liked,setLiked] = useState(false);
    const [unLiked,setUnLiked] = useState(false);

    function handlelike(){
        setLiked(liked => !liked);
    }

    function handleunlike(){
        setUnLiked(liked => !liked);
    }

    return(
        <div className="card-container" >
            <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} onClick={() => navigate("/player",{state : { id : id}})} className="banner-style" alt="moviephoto" />
            <p className="moviename">{movieData.name}</p>
            <div className="controls">
                <RiThumbUpFill onClick={handlelike} className={ Liked ? "liked" : "unliked" } />
                <RiThumbDownFill onClick={handleunlike} className={ unLiked ? "liked" : "unliked" } />
                <AiOutlinePlusCircle style={{color: 'white',cursor: 'pointer',padding: '5px 10px',align: 'center'}}/>
            </div>
        </div>
    );
});