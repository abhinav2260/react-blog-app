import { Component } from "react";
import hollywoodcontent from "../jsons/hollywood.json"
import Leftsubpage from "./sunpages/leftsubpage";
import Rightsubpage from "./sunpages/rightsubpage";
import React from "react";
import "../sytles/categoryarticles.css"


class Hollywood extends Component
{

    state={
        hollywoodcontent : hollywoodcontent,
        
    }

  
    render()
    {

        // console.log(this.state.bollywoodcontent);

        return(
                <>
                 
                 <div className="Heading">
                    <h2 className="bollywoodtext">Hollywood</h2>
                    <h2 className="top_post_text">Top Posts</h2>
                 </div>
                <div className="content">
                    <div className="leftbollywoodmenu">
                            {this.state.hollywoodcontent.map(details=>(
                                <Leftsubpage key={details.id} details={details} />
                            ))}
                    </div>
                    <div className="rightbollywoodmenu">

                            {this.state.hollywoodcontent.map(details=>(
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

export default Hollywood;