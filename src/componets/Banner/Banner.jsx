import React from 'react'
import style from './Banner.module.css'

const Banner = ({title = 'emptyText'}) => {
  return (
    <div style={style.h1} className='banner'>
        <h1>Weather APP</h1>
        <br></br>
        <h1>UI/UX</h1>
        <br></br>
        <h1>{title}</h1>
      </div>
  )
}

export default Banner