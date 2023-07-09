import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Player from "./pages/Player";
import TV from "./pages/TV";
import Mylist from "./pages/Mylist";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tv" element={<TV />} />
        <Route exact path="/mylist" element={<Mylist />} />
        <Route exact path="/player" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
