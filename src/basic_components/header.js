import React from "react";
import { NavLink } from "react-router-dom";
import  "../sytles/headerstyles.css"
import Navlinks from "./navlink";



function Header(props){
    return(
        <>
                <div className="heading">
                    <h1 className="Thetext">
                        The
                    </h1>
                    <h1 className="siren">
                        Siren
                    </h1>
                </div>

                <div className="navtab">
                        {props.navtabtitles.map(titles=>
                        (
                          <NavLink className="navtext"  to={titles.link}> <Navlinks key={titles.key} titles={titles} /> </NavLink>
                          
                        ))}
                </div>

        </>

    )
}

export default Header;