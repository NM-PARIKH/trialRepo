import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    return(
        <>
            {/* <Link to="/" > About Us </Link>
            <Link to="/contact" > Contact Us</Link> */}

            <NavLink activeClassName="active_class" exact to="/" > About Us </NavLink>
            <NavLink activeClassName="active_class" to="/contact" > Contact Us</NavLink>
            {/* NavLink thi aapde CSS add kari shakishu, import karvu Link ke NavLink */}

            <br/>
            <br/>
            <a href="/"> About </a>
            <a href="/contact"> Contact </a>
        </>
    )
}
export default Navbar;
