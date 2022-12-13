
import React from 'react'
import "../../sytles/categoryarticles.css"
import { NavLink } from "react-router-dom";


function Leftsubpage(props){

    return(
            
            <>
               <NavLink className='anchor' to={{
                        pathname: "/article/" + props.details.category+"/"+props.details.id.toString(),
                        
               }}>
                    <div className='articles'>
                        <div  >
                            <img className='article_image' src={"."+props.details.image} alt=""></img>
                        </div>
                        <div className='article_text'>
                            <h2 className='article_title'>{props.details.topic}</h2>
                            <p className='article_description'>{props.details.short_content}</p>
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

export default Leftsubpage;