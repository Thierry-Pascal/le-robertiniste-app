import React, { useState } from "react";
import facebookN from '../images/facebook-black.png'
import facebookH from '../images/facebook-blue.png'
import twitterN from '../images/twitter-black.png'
import twitterH from '../images/twitter-blue.png'
import link from '../images/link.png'

export default function Links() {

    //Setting the link urls as states
    const [facebookLogo, setFacebookLogo] = useState(facebookN)
    const [twitterLogo, setTwitterLogo] = useState(twitterN)

    //Changing them on mouse over
    function handleHover(logo) {
        if (logo == facebookLogo) {
            setFacebookLogo(facebookH)
        }
        else {
            setTwitterLogo(twitterH)
        }
    }
    //Restoring them on mouse leave
    function handleLeave(logo) {
        if (logo == facebookLogo) {
            setFacebookLogo(facebookN)
        }
        else {
            setTwitterLogo(twitterN)
        }
    }
    return (
        <div className="share-icons">
            <a><img src={link} className='link-icon' onClick={navigator.clipboard
            .writeText(window.location.href)}/></a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com" target="_blank" rel="noopener"><img src={facebookLogo} onMouseEnter={() => {handleHover(facebookLogo)}} onMouseLeave={() => {handleLeave(facebookLogo)}} className='facebook-link'/></a>
            <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener"><img src={twitterLogo} onMouseEnter={() => {handleHover(twitterLogo)}} onMouseLeave={() => {handleLeave(twitterLogo)}} className='twitter-link'/></a>
        </div> 
    )
}