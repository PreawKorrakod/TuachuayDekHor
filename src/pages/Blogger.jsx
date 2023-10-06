import React from 'react'
import "./Blogger.scoped.css"
import Navbar from '../component/Nav'
import img1 from '../../src/Assets/person-circle-outline.svg'

const Data = [
  {
    imgSrc: img1,
    writer: 'Pikachu',
  },

  {
    imgSrc: img1,
    writer: 'PumZaZa',
  },

  {
    imgSrc: img1,
    writer: 'Narak',
  },

  {
    imgSrc: img1,
    writer: 'WinterThePooh',
  },

  {
    imgSrc: img1,
    writer: 'AllinOne',
  },

  {
    imgSrc: img1,
    writer: 'Nov20',
  },

]

function Blogger() {
  return (
    <div className="Blogger">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="main">
        <h1 className='title'>
          Our Blogger
        </h1>
        <p>Something</p>
        <div className="blogger_wrapper">
        {
            Data.map(({ imgSrc, writer,}) => {
              return (
                <div className="box">
                  <div className="singleDest">
                    <img src={imgSrc} alt=""/>
                  </div>
                  <div className="userwrite">
                      {writer}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Blogger