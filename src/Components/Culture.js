import React from 'react';
import Box from './Box';
import sleep from '../images/sleep.png'

export default function Culture() {
    let preview = 'Sleep is the interest we have to pay on the capital which is called in at death; and the higher the rate of interest and the more regularly it is paid, the further the date of redemption is postponed'
    let title = 'Sleep Deprivation Among College Students'
    let author = 'Roberson Jean'
    let path = 'sleep-deprivation-among-college-students'
    return (
        <div className='flex'>
            <div className='section-title'>
                <h1>Culture</h1>
            </div>
            <div className='culture'>
                <Box  
                    class='culture-article first'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='culture-article second'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='culture-article third'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Box 
                    class='culture-article fourth'
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