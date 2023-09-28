import React from 'react'
import "./Decoration.scoped.css"
import Navbar from "../component/Nav";
import CleanSlide from '../component/CleanSlide';
import {Col} from 'reactstrap';

function Cleaning() {
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
          <CleanSlide></CleanSlide>
        </div>
      </div>
    </div>   
    )
}
export default Cleaning;