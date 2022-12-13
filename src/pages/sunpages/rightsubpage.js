
import React from 'react'
import "../../sytles/categoryarticles.css"
import { NavLink } from "react-router-dom";


function Rightsubpage(props){

   
    if(props.details.id<4)
    {
    return(
            
                <>
                <NavLink className='anchor' to={{
                        pathname: "/article/" + props.details.category+"/"+props.details.id.toString(),}}>
                    <div className='top_post_articles'>
                        <div  >
                            <img className='top_post_articles_image' src={"."+props.details.image} alt=""></img>
                        </div>
                        <div className='top_post_articles_text'>
                            <h2 className='top_post_articles_title'>{props.details.topic}</h2>
                            <div className='article_detail'>
                                <h3 style={{color:'black'}}>{props.details.category}</h3>
                                <p className='article_date'>/ {props.details.date}</p>
                            </div>
                        </div>
                    </div>
                </NavLink>


                </>
            

    )
    }

}

export default Rightsubpage;