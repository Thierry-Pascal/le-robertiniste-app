import React from 'react';
import logoC from '../images/logo-circle.png';

export default function Navbar() {
    return (
        <nav className='nav'>
            <div className='nav-logo'>
                <a href='#'><img src={logoC} className='logoC'/></a>
                <div className='robertiniste'>
                    <a href='/'>
                    <h2>Le</h2>
                    <h1>Robertiniste</h1>
                    </a>
                </div>
                <div className='newsletter'>
                    <p className='newsletter-text'><a href='#'>NEWSLETTER</a></p>
                    <p><a href='#'><span class="material-symbols-outlined">search</span></a></p>
                </div>
            </div>
            <div className='navbar'>
                <ul>
                    <a href='#'><li>Actualités</li></a>
                    <a href='#'><li>Culture</li></a>
                    <a href='#'><li>Sport</li></a>
                    <a href='#'><li>Technologie</li></a>
                    <a href='#'><li>Science</li></a>
                    <a href='#'><li>Opinion</li></a>
                    <a href='#'><li>Jeux Et Puzzles</li></a>
                    <a href='#'><li>Fictions et Poèmes</li></a>
                </ul>
            </div>
        </nav>
    )
}