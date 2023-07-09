import React from "react";
import Card from "./Card";
import "./Card.css"

export default React.memo(function CardSlider({title,data}){

    return(
    <div>
        <p className="title">{title}</p>
        <div className="card-slider">
        {
            data.map((movie,index)  => {
                return <Card movieData={movie} index={index} key={movie.id} />
            })
        }       
        </div>
    </div>    
    )
});