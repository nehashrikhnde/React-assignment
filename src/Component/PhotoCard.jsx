import React from "react";
import "../styles/PhotoCard.css"

const PhotoCard =({id,url}) =>{
    return(
        <div>
        <div id="PhotoCard">
         <img src = {url} alt=""/>
         <h1>{id}</h1>
        </div>
        </div>
    )
}





export default PhotoCard;