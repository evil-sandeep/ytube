import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import ComentsContainer from './ComentsContainer';

const WatchVedio = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())

    })
    return (
        <div >
            <div>
                <iframe width="880"
                    height="460"
                    className='block object-cover overflow-clip m-10 scroll-ml-16'
                    src={'https://www.youtube.com/embed/' + searchParams.get('v')}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <ComentsContainer />
        </div>
    )
}

export default WatchVedio