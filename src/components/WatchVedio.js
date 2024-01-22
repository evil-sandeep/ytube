import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';

const WatchVedio = () => {
    const [searchParams] = useSearchParams()
    console.log(searchParams.get('v'))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())

    })
    return (
        <div>
            <iframe width='1200'
                height='600'
                src={'https://www.youtube.com/embed/' + searchParams.get('v')} 
                frameborder="0">
                      
                </iframe>
        </div>
    )
}

export default WatchVedio