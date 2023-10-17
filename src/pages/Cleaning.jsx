import React from 'react'
import "./Cleaning.scoped.css"
import Navbar from "../component/Nav";
import ContentSlide from '../component/ContentSlide';
import {Col} from 'reactstrap';

function Cleaning() {
  const data = [
    {
      id: 1,
      title: "TEST",
    },
    {
      id: 2,
      title: "TEST2",
    }
  ]

  return (
    <div className="Decoration">
      <header>
        <Navbar/>
      </header>
      <main>
        <h1 className="title">
            CLEANING
        </h1>
      </main>
      <div className="Container">
        <div className="rec">
            <div className="rec__title">
              <h2 className="title_sub">Cleaning Ideas By DekHor</h2>
            </div>
          <ContentSlide name ={"Cleaning"}/>
        </div>
      </div>
    </div>   
    )
}
export default Cleaning;