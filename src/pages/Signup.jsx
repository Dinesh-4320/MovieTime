import React from "react";
import Header from "../components/Header";

export default function Signup(){
    return(
        <main>
            <img src='LoginBack.jpg' alt="BackgroundImage" className="background-image" />
            <Header page="Login" question="Already User?" />
        </main> 
    );
}