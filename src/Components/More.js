import React from "react";
import Box from "./Box";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function More() {
    const [test, setTest] = useState('')

    //Getting the collection with the articles from firebase
    const articlesCollection = collection(db, 'articles')
    //Creating a state that will store the data collected
    const [dt, setDt] = useState([])
    //Getting the data and creating the boxes
    const boxes = []
    useEffect(() => {
        const getArticle = async () => {
            const data = await getDocs(articlesCollection)
            for (let i = 0; i < data.docs.length; i++) {
                console.log(i)
                if (i == 0) {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='more-article first' key={data.docs[i].data().pathname} previewed={true}/>])
                } else if (i == 1) {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='more-article second' key={data.docs[i].data().pathname} previewed={true}/>])
                } else if (i == 2) {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='more-article third' key={data.docs[i].data().pathname} previewed={true}/>])
                } else {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='more-article fourth' key={data.docs[i].data().pathname} previewed={true}/>])
                }
            }
        };
        getArticle()

    }, [test])

    return (
        <div className='flex'>
            <div className='more-title'>
                <h1>LIRE PLUS</h1>
            </div>
            <div className='more'>
                {dt[0]}
                {dt[1]}
                {dt[2]}
                {dt[3]}
            </div>
        </div>
    )
}