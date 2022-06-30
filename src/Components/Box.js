import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useParams, Link } from "react-router-dom";

export default function Box(props) {
    
    const article = {
        title: props.title,
        author: props.author,
        img: props.img
    }
    const articlesCollection = collection(db, 'articles')
    const [data, setData] = useState({})
    useEffect(() => {
        const getArticle = async () => {
            const data = await getDocs(articlesCollection)
            setData(data.docs[0].data())
        };
        getArticle()
    }, [])
    let { path } = useParams()
    path = '/articles/' + data.pathname
    return (
        <div className={props.class}>
            <img src={props.img}/>
            <div className="box-text">
                <Link to={path} state={data}><h1 className="article-title">{data.title}</h1></Link>
                {props.previewed && <p className="article-preview">{data.preview}</p>}
                <p className="article-author">By {data.author}</p>
            </div>
        </div>
    )
}