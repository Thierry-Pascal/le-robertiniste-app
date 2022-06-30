import React from 'react';
import Box from './Box';
import sleep from '../images/sleep.png'
import Separation from './Separation';

export default function Recent(props) {
    let preview = 'Sleep is the interest we have to pay on the capital which is called in at death; and the higher the rate of interest and the more regularly it is paid, the further the date of redemption is postponed'
    let title = 'Sleep Deprivation Among College Students'
    let path = 'sleep-deprivation-among-college-students'
    let author = 'Roberson Jean'
    return (
        <div className='flex'>
            <div className='section-title'>
                <h1>À La Une</h1>
            </div>
            <div className='articles'>
                <div>
                <Box 
                    class='secondary-left'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                <Separation />
                <Box 
                    class='secondary-left'
                    img={sleep}
                    author={author}
                    title={title}
                    preview={preview}
                    path={path}
                    previewed={true}
                />
                </div>
                <div className='main-recent'>
                    <Box 
                        class='principal'
                        img={sleep}
                        author={author}
                        title={title}
                        preview={preview}
                        path={path}
                        previewed={true}
                    />
                    <Separation />
                    <Box 
                        class='principal flex-box'
                        img={sleep}
                        author={author}
                        title={title}
                        preview={preview}
                        path={path}
                        previewed={true}
                    />
                </div>
                
                <div className='secondary-right'>
                    <Box 
                        class='principal flex-box'
                        img={'https://rapid-meta.com/wp-content/uploads/2022/06/innu-dogge.webp'}
                        author={author}
                        title={'What are NFTs?'}
                        preview=''
                        path={'que-sont-les-nfts'}
                        previewed={false}
                    />
                    <Separation />
                    <Box 
                        class='principal flex-box'
                        img={sleep}
                        author={author}
                        title={title}
                        preview=''
                        path={path}
                        previewed={false}
                    />
                    <Separation />
                    <Box 
                        class='principal flex-box'
                        img={sleep}
                        author={author}
                        title={title}
                        preview=''
                        path={path}
                        previewed={false}
                    />
                    <Separation />
                    <Box 
                        class='principal flex-box'
                        img={sleep}
                        author={author}
                        title={title}
                        preview=''
                        path={path}
                        previewed={false}
                    />
                    <Separation />
                    <Box 
                        class='principal flex-box'
                        img={sleep}
                        author={author}
                        title={title}
                        preview=''
                        path={path}
                        previewed={false}
                    />
                </div>
            </div>
        </div>
    )
}
