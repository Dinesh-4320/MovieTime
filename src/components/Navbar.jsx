import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import {BiPowerOff} from "react-icons/bi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

export default function Navbar({isScrolled}){
    const nav_links = [
        {name:"Home", link:"/"},
        {name:"TV Shows", link:"/tv"},
        {name:"My list", link:"/mylist"},
    ]

    const navigate= useNavigate();

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(!currentUser) navigate("/Login")
    })

    return(
        <div className="Navbar">
            <img src="logo.png" alt="Home logo" className="home-logo"/> 
            <ul className="list-link">
                {nav_links.map(data => <li className="navbar-links" key={data.name}><Link className="Link" to={data.link}>{data.name}</Link></li>
                )}
            </ul>
            <div className="search-bar">
                <input type="text" name="search-input" className="search-input" placeholder="Search"/>
                <BiPowerOff className="logout-button" onClick={() => signOut(firebaseAuth)}/>
            </div>
        </div>
    );
}

