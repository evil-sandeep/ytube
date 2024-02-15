import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list=['All','gaming', 'live','match','cricket','study','teach','sandeep','unemploeeed','trainding','shop','music','hockey','play','freefire','bgmi',''];
  return (
    <div className='flex '>
      {list.map((item,index)=>(
        <Button key={index} name={item} />
      ))}
      
     
    </div>


  )
}

export default ButtonList