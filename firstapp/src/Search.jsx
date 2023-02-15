import React, { useState } from "react";
const Search = () =>{
    const [img,setImg]=useState("");
    const inp =(e)=>{
        setImg(e.target.value);
    }
    return (
        <>
            <br/>
            <br/>
            <br/>
            <div className="hii" style={{backgroundColor:"yellow",display:"flex",borderRadius:"15px", justifyContent:"center"}}>
                   <input value={img} style={{backgroundColor:"yellow"}} type="text" placeholder="Search here" onChange={inp}/>
            </div>
        </>
    );
}
export default Search;