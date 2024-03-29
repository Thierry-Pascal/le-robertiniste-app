import React from "react";
import Separation from "./Separation";
import facebook from '../images/facebook.png'
import ig from '../images/instagram.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className='footer-robertiniste'>
                    <a href='/'>
                        <h2>Le</h2>
                        <h1>Robertiniste</h1>
                    </a>
            </div>
            <Separation />
            <div className="footer-links">
                <ul className="active">
                    <a href='#'><li>News</li></a>
                    <a href='#'><li>Culture</li></a>
                    <a href='#'><li>Tech</li></a>
                    <a href='#'><li>Science</li></a>
                    <a href='#'><li>Opinion</li></a>
                    <a href='#'><li>About</li></a>
                    <a href='#'><li>Contact</li></a>
                </ul>
                <p>Contact: <span><a href="#">dainarobersonjean@gmail.com</a></span></p>
                <ul className="social-networks">
                    <li><a><img src={facebook}/></a></li>
                    <li><a><img src={ig}/></a></li>
                </ul>
            </div>
        </div>
    )
}