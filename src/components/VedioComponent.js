import React, { useEffect, useState } from 'react'
import { YT_API_KEY } from '../utils/constant'
import VedioCards from './VedioCards'


const VedioComponent = () => {
  const [vedio, setVedio] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(YT_API_KEY);
        if (!response) {
          throw new Error();
        }
        const data = await response.json();
        setVedio(data.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='flex flex-wrap'>
      {vedio.map(vedioList=> <VedioCards key={vedioList.id} info={vedioList} />)}
      
     
    </div>
  )
}

export default VedioComponent