import React from 'react'
import ButtonList from './ButtonList'
import VedioComponent from './VedioComponent'

const MainComponent = () => {
  return (
    <div className='col-span-11'>
      <ButtonList />
      <VedioComponent />
    </div>
  )
}

export default MainComponent