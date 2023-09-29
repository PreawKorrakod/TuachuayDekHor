import React from 'react'
import "./Decoration.scoped.css"
import Navbar from "../component/Nav";
import ImgSlide from '../component/ImgSlide';
import {Container} from 'reactstrap'
import SlideCooking from '../component/SlideCooking';

function Cooking() {
  return (
    <div className="Decoration">
      <header>
        <Navbar/>
      </header>
      <main>
        <h1 className="title">
            COOKING
        </h1>
      </main>
      <div className="Container">
        <div className="rec">
            <div className="rec__title">
              <h2 className="title_sub">Let's make easy food with DekHor</h2>
            </div>
          <SlideCooking></SlideCooking>
        </div>
      </div>
    </div>   
    )
}


export default Cooking