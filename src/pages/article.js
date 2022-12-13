import React from "react";
import { useParams } from "react-router-dom";
import "../sytles/article.css"
import Hollywood from "../jsons/hollywood.json";
import Bollywood from "../jsons/bollywood.json";
import Technology from "../jsons/technology.json";
import Food from "../jsons/food.json";
import Fitness from "../jsons/fitness.json";


function Article(props)
{
    const params =useParams();
    

    var articleinfo;
    
    switch(params.category)
    {
        case "Bollywood":
            articleinfo = Bollywood;
            break;

        case "Technology":
            articleinfo = Technology;
            break;
        
        case "Hollywood":
            articleinfo = Hollywood;
            break;
    
        case "Fitness":
            articleinfo = Fitness;
            break;
        
        case "Food":
            articleinfo =  Food;
            break;  
        
        default:
            break;    
    }           
                
   var details;   
   
   articleinfo.map((item)=>{

    if(item.id==params.id)
    {
        
      details  = item;
    }
})
    
   
    
    return(
        
        <>
        <div className="articlepage_content">

            
            <h1 className="articlepage_title">{details.topic}</h1>

            <img className='articlepage_image' src={"/category"+details.image} alt=""></img>
          
            <p1 className='articlepage_text'>{details.content}</p1>
            
            <div className="article_dialogbox">
                
                <div className="articlepage_writer">
                    <img className='' src="/category/images/symbol.png" alt=""></img>
                    <div className="articlepage_writer_text">
                        <h3>WRITTEN BY</h3>
                        <h3>ABHINAV RAJ</h3>
                        <h3>{details.date}</h3>

                </div>

                      
                </div>

                <h3 className="articlepage_category">{details.category}</h3>  
            </div>
    
          
        </div>
            
        
        </>
    )
      
}

export default Article;