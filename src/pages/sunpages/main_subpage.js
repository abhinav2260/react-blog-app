import React from "react";
import "../../sytles/home.css"

function Mainsubpage(props){

    return(

            <>
                <div className="content_container">
                    <img className='image' src={"./category"+props.content.image} alt=""></img>
                        <h2 className="title">
                            {props.content.topic}
                        </h2>
                </div>
            </>



    )


}

export default Mainsubpage;