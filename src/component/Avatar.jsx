import React from 'react'
import "./Avatar.scoped.css"

function Avatar(props) {
  if (props.src) {
    return (<div className='w-full'>
      <img class="h-12 w-12 text-gray-300" src={props.src}/>
    </div>)
  }
  return (
    <div className='avatar-wrap'>
      <img src="dekHor_Avatar.png" alt="" />
    </div>
  )
}

export default Avatar;