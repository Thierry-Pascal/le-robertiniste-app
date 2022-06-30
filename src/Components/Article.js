import React from "react"
import { useLocation } from "react-router-dom"
import Separation from "./Separation"

export default function Article(props) {
    let location = useLocation()
    let data = location.state

    return (
        <div className="article">
            <div className="text-title">
                <h1 className="title">{data.title}</h1>
            </div>
            <div className="metadata">
                <p className="author">{data.author} </p> 
                <p className="date"> / {data.date}</p>
            </div>  
            <Separation /> 
            <div className="image-container">
                <img src={data.img}/>
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: data.text}}></div>
            <Separation />
            <div className="author-box">
                <p>{data.authorDescription}</p>
            </div>
        </div>
    )
}