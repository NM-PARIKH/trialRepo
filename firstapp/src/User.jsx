import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const User = () => {
    const {name} = useParams();
    const location = useLocation();
    const history = useNavigate();
    return(
        <>
            <h1> User {name} Page </h1>
            <p> My Current location is {location.pathname} </p>
            {/* {location.pathname === '/user/react' ? <button onClick={()=> history.goBack()}> Go Back </button> : null} */}
            {location.pathname === '/user/react' ? <button onClick={()=> history("/")}> Home Page </button> : null}
        </>
    )
}
export default User;