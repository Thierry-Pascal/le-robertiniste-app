import React from 'react';
import Box from './Box';
import Separation from './Separation';
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'

export default function Recent(props) {

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
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='principal' key={data.docs[i].data().pathname} previewed={true}/>])
                } else if (i == 1) {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='principal flex-box' key={data.docs[i].data().pathname} previewed={true}/>])
                } else if (i == 2 || i ==3) {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='secondary-left' key={data.docs[i].data().pathname} previewed={true}/>])
                } else {
                    setDt((arr) => [...arr, <Box {...data.docs[i].data()} class='principal flex-box' key={data.docs[i].data().pathname} previewed={false}/>])
                }
            }
        };
        getArticle()

    }, [test])
    return (
        <div className='flex'>
            <div className='section-title'>
                <h1>À La Une</h1>
            </div>
            <div className='articles'>
                <div>
                {dt[2]}
                <Separation />
                {dt[3]}
                </div>
                <div className='main-recent'>
                    {dt[0]}
                    <Separation />
                    {dt[1]}
                </div>
                
                <div className='secondary-right'>
                    {dt[4]}
                    <Separation />
                    {dt[4]}
                    <Separation />
                    {dt[4]}
                </div>
            </div>
        </div>
    )
}
