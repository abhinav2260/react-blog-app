import React, { Component } from "react";
import technologycontent from "../jsons/technology.json"
import "../sytles/home.css"
import Mainsubpage from "./sunpages/main_subpage";
import Bollywood from "./bollywood";
import Fitness from "./fitness";
import Food from "./food";
import Hollywood from "./hollywood";
import Technology from "./technology";
import { NavLink } from "react-router-dom";

class Home extends Component{

    state={
        technologycontent : technologycontent,
        
    }

 

    render(){
       return(
        <>
         
        <div className="top_menu">
            <div className="home_main_left" >
            <NavLink className='anchor' to={{
                        pathname: "/article/" + technologycontent[0].category+"/"+technologycontent[0].id.toString(),
                        
               }}>
                <div className="content_container1">
                        <img className='image1' src={"/category"+technologycontent[0].image} alt=""></img>
                        <h2 className="title">
                            {technologycontent[0].topic}
                        </h2>
                </div>
            </NavLink>    
            </div>

            <div className="home_main_right">
                <NavLink className='home_anchor' to={{
                        pathname: "/article/" + technologycontent[1].category+"/"+technologycontent[1].id.toString(),
                        
                 }}>
                    <Mainsubpage key={technologycontent[1].id} content={technologycontent[1]} />
                </NavLink> 

                <NavLink className='home_anchor' to={{
                        pathname: "/article/" + technologycontent[2].category+"/"+technologycontent[2].id.toString(),
                        
               }}>
                <Mainsubpage key={technologycontent[2].id} content={technologycontent[2]} />
                 </NavLink> 

            </div>

        </div>

        <div className="latest">
            <h2 className="latest_title">Latest from </h2>
            <Bollywood />
            <h2 className="latest_title">Latest from </h2>
            <Fitness />
            <h2 className="latest_title">Latest from </h2>
            <Food />
            <h2 className="latest_title">Latest from </h2>
            <Hollywood />
            <h2 className="latest_title">Latest from </h2>
            <Technology />

            

        </div>
        </>        
       )
    }

}


export default Home; 