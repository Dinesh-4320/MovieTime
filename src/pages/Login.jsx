import React from "react";
import Header from "../components/Header";

export default function Login(){
    return(
        <main>
            <img src='LoginBack.jpg' alt="BackgroundImage" className="background-image" />
            <Header page="Signup" question="New User?"/>
        </main> 
    );
}