import React from 'react';
import Box from './Box';
import sleep from '../images/sleep.png'

export default function Fiction() {
    let preview = 'Sleep is the interest we have to pay on the capital which is called in at death; and the higher the rate of interest and the more regularly it is paid, the further the date of redemption is postponed'
    let title = 'Sleep Deprivation Among College Students'
    let author = 'Roberson Jean'
    let path = 'sleep-deprivation-among-college-students'
    return (
        <div className='flex'>
            <div className='section-title'>
                <h1>Fictions Et Poèmes</h1>
            </div>
            <div className='fiction'>
                <Box  
                    class='fiction-article first'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='fiction-article second'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='fiction-article third'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='fiction-article fourth'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
            </div>
        </div>
    )
}