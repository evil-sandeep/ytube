import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-flow-col shadow-md mt-3'>
            <div className='flex '>
                <img  className='grid-rows-1 h-8 px-2 m-2'
                 src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png" alt="" />

                <img  className='grid-rows-1 h-8 px-2 m-2'
                 src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png" alt="Yt Logo" />
            </div>

            <div className='col-span-10 px-10 mt-1 ml-10'>
                <input className='w-1/2 border border-black  rounded-l-full px-5 py-1'  type="text" name='seatch' />
                <button className='border border-black  bg-slate-200 px- rounded-r-full px-5 py-1  '>🔍</button>
            </div>

            <div className=' mt-2'>
                <img className=' h-8' src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" />
            </div>
        </div>
    )
}

export default Header