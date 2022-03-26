import React from "react";
import {Link} from "react-router-dom";


class Nav extends React.Component{
    render(){

        return(
            <nav>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">Main</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/favorites">Favorites</Link></li>
                </ul>
            </nav>
        )
    }
}


export default Nav