import React from 'react'
import "./Decoration.scoped.css"
import Navbar from "../component/Nav";
import {Col,Row,Container} from "reactstrap";
import DecSlide from '../component/DecSlide';

function Decoration() {
  return (
    <div className="Decoration">
      <header>
        <Navbar/>
      </header>
      <main>
        <h1 className="title">
            DECORATION
        </h1>
      </main>
      <div className="Container">
        <div className="rec">
            <div className="rec__title">
              <h2 className="title_sub">Idea for Your Room By DekHor</h2>
            </div>
          <DecSlide></DecSlide>
        </div>
      </div>
    </div>   
    )
}


export default Decoration