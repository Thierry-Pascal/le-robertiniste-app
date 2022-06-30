import React from "react";
import { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useParams, Link } from "react-router-dom";

export default function Box(props) {
    /*let text = `<p>&quot;Sleep is the interest we have to pay on the capital which is called in at death; and the higher the rate of interest and the more regularly it is paid, the further the date of redemption is postponed&quot;(Brainyquote). These words by Arthur Schopenhauer, a German philosopher, described the importance of sleep and how sleep deprivation can lead to death. Sleep deprivation, not getting enough sleep, is a very common problem among college students. The factors that cause sleep deprivation among college students are well known and the consequences are visible in students&rsquo; academic performances. Since then, sleep deficit has been associated with a lack of concentration and attention during class.<br><br>
    According to Dictionary.com, sleep is a periodic state of physiological rest during which consciousness is suspended (dictionary.com). Based on this definition, sleep is a necessity for all humans. It is beneficial for all the body components, as explained in an article published by the Sleep Foundation, &ldquo;Sleep is an essential function that allows the body and mind to recharge'' (Danielle Pacheco). The body and brain stay active for a whole day, then sleep are what is required to get the body and mind recharged and store pieces of information acquired throughout the day. <br><br>
    During this biological process, a lot of things happen such as kids&rsquo; growth and dreams. This state of rest is characterized by altered consciousness, reduced muscle activity, and inhibition of nearly all voluntary muscles. The body repairs cells during this moment of physical inactivity and restores energy. This is also when students have the new information acquired during the day wired in their brains. Furthermore, sleep is a moment to boost the immune system by renewing body cells and good blood circulation. Failing to not complete a good sleep rate can lead to other issues that are harmful to one&rsquo;s health such as sleep deprivation (Danielle Pacheco, Abhinav Singh).<p>`*/
    
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