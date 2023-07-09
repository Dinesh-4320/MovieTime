import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Header.css";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';




export default function Header(props){
    const navigate=useNavigate();
    const [Credentials,setCredentials]=React.useState({
        email:"",
        password:"",
    });

    function handleChange(event){
        const {name,value} = event.target;
        setCredentials(prevState => ({
            ...prevState,
            [name]:value
        })
    )}

    const handleSignIn = async ()=>{
        try {
            const { email,password }=Credentials;
            await signInWithEmailAndPassword(firebaseAuth,email,password)
            } catch(err){
            console.log(err);
        }
    };

    const handleSignUp = async ()=> {
        try {
            const { email,password }=Credentials;
            createUserWithEmailAndPassword(firebaseAuth,email,password)
            } catch(err){
            console.log(err);
        }
    };

    onAuthStateChanged(firebaseAuth,(currentUser) =>{
            if(currentUser) navigate("/");
        })
    

    return(
        <div className="content">
            <div className="quotes">
                <img src='logo.png' alt="logo" className="logo-image" />
                <h1>Gain Unlimited Entertainment in movies</h1>
                <h3>Immerse in Movie world</h3>
                <h5>Watch the whole universe</h5> 
            </div>   
            <div className="form">
                <input type="email" onChange={handleChange} placeholder="Enter Email" name="email" className="email" value={Credentials.email}/>
                <input type="password" onChange={handleChange} placeholder="Enter password" name="password" className="password" value={Credentials.password}/>
                <input type="button" name={props.page==="Login"?'Signup':'Login'} onClick={props.page==="Login"?handleSignUp:handleSignIn} className="form-button" value={props.page==="Login"?'Signup':'Login'} />
            </div>
            <p>{props.question}<input type="button" name="Login" onClick={() => navigate(props.page==="Login"?'/Login':'/Signup')} className="button" value={props.page==="Login"?'Login':'Signup'} /></p>
        </div>     
    );
}