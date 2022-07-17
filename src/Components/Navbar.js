import React, {useRef} from 'react';
import nav from '../images/navbar.png';

export default function Navbar() {
    let ref = useRef();

    function handleClick() {
        if (ref.current.style.display == 'none' || ref.current.style.display == '') {
            ref.current.style.display = 'block'
            document.body.style.overflow = 'hidden'
        } else {
            ref.current.style.display = 'none'
            document.body.style.overflow = 'scroll'
        }
    }
    return (
        <nav className='nav'>
            <div className='nav-logo'>
                <a><img src={nav} className='logoC' onClick={() => {handleClick()}}/></a>
                <div className='robertiniste'>
                    <a href='/'>
                    <h2>Le</h2>
                    <h1>Robertiniste</h1>
                    </a>
                </div>
                <div className='newsletter'>
                    <p className='newsletter-text active-search'><a href='#'>SEARCH</a></p>
                    <p><a href='#'><span class="material-symbols-outlined">search</span></a></p>
                </div>
            </div>
            <div ref={ref} className='navbar active'>
                <ul>
                    <a href='#'><li>News</li></a>
                    <a href='#'><li>Culture</li></a>
                    <a href='#'><li>Tech</li></a>
                    <a href='#'><li>Science</li></a>
                    <a href='#'><li>Opinion</li></a>
                    <a href='#'><li>About</li></a>
                    <a href='#'><li>Contact</li></a>
                </ul>
            </div>
        </nav>
    )
}