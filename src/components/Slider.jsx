import React from "react";
import CardSlider from "./CardSlider";
import "./Card.css"

export default React.memo(function Slider({movies}) {

    const getMoviesFromRange = (from,to) => {
        return movies.slice(from,to);
    };

    return(
        <div className="slider">
            <CardSlider title="Trending Now" data={getMoviesFromRange(0,10)} />
            <CardSlider title="New Releases" data={getMoviesFromRange(10,20)} />
            <CardSlider title="Blockbusters" data={getMoviesFromRange(20,30)} />
            <CardSlider title="Populars" data={getMoviesFromRange(30,40)} />
            <CardSlider title="Action" data={getMoviesFromRange(40,50)} />
            <CardSlider title="Epics" data={getMoviesFromRange(50,60)} />
        </div>
    );
});