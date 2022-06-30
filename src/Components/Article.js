import React, { useEffect,useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import Separation from "./Separation"

export default function Article(props) {
    let location = useLocation()
    let data = location.state
    let pathname = useParams()
    const articlesCollection = collection(db, 'articles')
    let dataKeeper = {}
    useEffect(() => {
        window.scrollTo(0, 0);
        const getArticle = async () => {
            const data = await getDocs(articlesCollection)
            data.docs.map((doc) => {
                if(doc.data().pathname == pathname.pathname) {
                    dataKeeper = doc.data()
                }
            })
        };
        getArticle()
    }, [location])

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