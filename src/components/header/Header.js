import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./header.scss"

const Header = () => {
    return (<div className="header">
        <Link to="/"><h1>GitHub</h1></Link>
    </div>)
}

export default Header