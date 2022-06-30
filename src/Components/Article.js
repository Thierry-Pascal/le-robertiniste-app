import React, { useEffect,useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import Separation from "./Separation"

export default function Article(props) {
    //Receiving the location and pathname from react router dom hooks
    let location = useLocation()
    let pathname = useParams()
    //Getting the articles collection from firebase
    const articlesCollection = collection(db, 'articles')
    //creating a state that will store the data of the page
    const [dataKeeper, setDataKeeper] = useState({})
    //Using the use effect hook to automatically scroll up
    useEffect(() => {
        window.scrollTo(0, 0);
        //Using an async function to get data from firebase
        const getArticle = async () => {
            const data = await getDocs(articlesCollection)
            //checking if the data is the same as the path name
            data.docs.map(async (doc) => {
                //if they are the same, get all data to display
                if(doc.data().pathname == pathname.pathname) {
                    let data = doc.data()
                    setDataKeeper(data)
                }
            })
        };
        getArticle()
    }, [location])
    return (
        <div className="article">
            <div className="text-title">
                <h1 className="title">{dataKeeper.title}</h1>
            </div>
            <div className="metadata">
                <p className="author">{dataKeeper.author} </p> 
                <p className="date"> / {dataKeeper.date}</p>
            </div>  
            <Separation /> 
            <div className="image-container">
                <img src={dataKeeper.img}/>
                <div className="credits">
                    <span class="material-symbols-outlined credits-icon">photo_camera</span>
                    <span className="credits-text"><strong>Image Credits:</strong> {dataKeeper.credits}</span>
                </div>
                
            </div>
            <div className="text" dangerouslySetInnerHTML={{__html: dataKeeper.text}}></div>
            <Separation />
            <div className="author-box">
                <p>{dataKeeper.authorDescription}</p>
            </div>
        </div>
    )
}