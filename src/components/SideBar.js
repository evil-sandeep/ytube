import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const isMenuopen = useSelector((store => store.app.isMenuopen))

  //Early return
  // if(!isMenuopen) return null
  
  return !isMenuopen ? null : (
    <div className=' shadow-md m-2  p-2 w-28 cursor-pointer'>

      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul>
        <h1 className='font-bold mt-2'>Watch Later</h1>
        <li>Home </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul>
        <h1 className='font-bold mt-2'>Tranding</h1>
        <li>Home </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
    </div>
  )
}

export default SideBar