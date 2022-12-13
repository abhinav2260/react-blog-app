import { Component } from "react";
import fitnesscontent from "../jsons/fitness.json"
import Leftsubpage from "./sunpages/leftsubpage";
import Rightsubpage from "./sunpages/rightsubpage";
import React from "react";
import "../sytles/categoryarticles.css"


class Fitness extends Component
{

    state={
        fitnesscontent : fitnesscontent
        
    }

   

    render()
    {

       

        return(
                <>
                 <div className="Heading">
                    <h2 className="bollywoodtext">Fitness</h2>
                    <h2 className="top_post_text">Top Posts</h2>
                 </div>
                <div className="content">
                    <div className="leftbollywoodmenu">
                            {this.state.fitnesscontent.map(details=>(
                                <Leftsubpage key={details.id} details={details} />
                            ))}
                    </div>
                    <div className="rightbollywoodmenu">

                            {this.state.fitnesscontent.map(details=>(
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

export default Fitness;