import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useParams, Link } from "react-router-dom";

export default function Box(props) {
    //Getting the collection with the articles from firebase
    const articlesCollection = collection(db, 'articles')
    //Creating a state that will store the data collected
    const [data, setData] = useState({})
    //Using the use effect hook to get the data from firebase
    useEffect(() => {
        const getArticle = async () => {
            const data = await getDocs(articlesCollection)
            setData(data.docs[0].data())
        };
        getArticle()
    }, [])
    //seting a path for the article
    let { path } = useParams()
    path = '/articles/' + props.pathname

    //Returning the data driven box
    return (
        <div className={props.class}>
            <img src={props.img}/>
            <div className="box-text">
                <Link to={path} state={props}><h1 className="article-title">{props.title}</h1></Link>
                {props.previewed && <p className="article-preview">{props.preview}</p>}
                <p className="article-author">{props.author}</p>
            </div>
        </div>
    )
}