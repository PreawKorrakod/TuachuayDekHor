import React from 'react'
import "./Avatar.scoped.css"

function Avatar(props) {
  if (props.src) {
    return (<div className='avatar-wrap'>
      <img class="img_User" src={props.src} />
    </div>)
  }
  return (
    <div className='avatar-wrap'>
      <img src="dekHor_Avatar.png" alt="" />
    </div>
  )
}

export default Avatar;