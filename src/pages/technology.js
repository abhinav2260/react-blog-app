import { Component } from "react";
import technologycontent from "../jsons/technology.json"
import Leftsubpage from "./sunpages/leftsubpage";
import Rightsubpage from "./sunpages/rightsubpage";
import React from "react";
import "../sytles/categoryarticles.css"


class Technology extends Component
{

    state={
        technologycontent : technologycontent,
        
    }

    
 

    render()
    {

       

        return(
                <>
               
               <div className="Heading">
                    <h2 className="bollywoodtext">Technology</h2>
                    <h2 className="top_post_text">Top Posts</h2>
                 </div>
                <div className="content">
                    <div className="leftbollywoodmenu">
                            {this.state.technologycontent.map(details=>(
                                <Leftsubpage key={details.id} details={details} />
                            ))}
                    </div>
                    <div className="rightbollywoodmenu">

                            {this.state.technologycontent.map(details=>(
                                 <Rightsubpage key={details.id} details={details} />
                              
                            ))}

                            <div className="ad">
                                <h2>Advertisement</h2>
                            </div>
                    </div>        

                    
                </div>    
                </>
        )

        
    }
        

}

export default Technology;