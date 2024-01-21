import React from 'react'
import SideBar from './SideBar'
import MainComponent from './MainComponent'

const Body = () => {
    return (
        <>
            <div className='flex'>
                <SideBar />
                <MainComponent />
            </div>
        </>
    )
}

export default Body