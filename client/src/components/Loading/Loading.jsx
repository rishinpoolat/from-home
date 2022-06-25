import React from 'react'
import loaderGif from '../../assets/loader.gif';
// import './loading.css'

const Loading = () => {
  return (
    <div className='loader df ai-c jcc'>
        <img className='loader-gif' src={loaderGif} alt="loading....."/>
    </div>
  )
}

export default Loading