import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Search from "./Search";
import User from "./User";
const App=()=>{
  return(
    <>
<Navbar/>
    <Routes>
        <Route path="/search" element={<Search/>}/>
        <Route path="/" element={ <About name="About us"/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/user/:name" element={<User/>}/>
    </Routes>
    </>
  );
}
export default App;

