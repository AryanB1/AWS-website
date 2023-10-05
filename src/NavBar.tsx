//Imports
import React from "react";
import { Link } from "react-router-dom";
//Start NavBar
function NavBar() {
    return(
    <nav id="navigation">
        <ul>
            <li>
                <Link to ="/">Home</Link>
            </li>
            <li>
                <Link to ="/resume">Resume</Link>
            </li>
        </ul>
    </nav>
    )
};
//End NavBar
// Export
export default NavBar;