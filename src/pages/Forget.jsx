import React from 'react'
import './Forget.scoped.css'

function Forget() {
  return (
    <div className="Forget">       
        <div className="noti-box">
            <h2>Reset Password</h2>
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Confirm Password' />
            <button><a href="home">Back Home</a></button>
        </div>
    </div>
  )
}

export default Forget