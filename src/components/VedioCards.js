import React from 'react'


const VedioCards = ({ info }) => {

  console.log(info)
  if (!info) {
    return <div>No Vedio available</div>
  }
  const { snippet, statistics } = info;
  if (!snippet) {
    return <div>No snippet available</div>
  }
  const { thumbnails, title, channelTitle, publishedAt } = snippet
  return (
    <div className='p-2 m-2  w-72 shadow-sm border border-gray-100'>
      <img src={thumbnails.high.url} alt="" />
      <ul>
        <li className='font-bold'>{title} </li>
        <li>{channelTitle}</li>
        <li>Likes:{statistics?.likeCount}</li>
        <li>Time{publishedAt}</li>
      </ul>
    </div>
  )
}

export default VedioCards