import React from 'react';
import "./Report.scoped.css";
import { Link } from "react-router-dom";
import NavHead from '../component/Nav';
const Report = () =>{
    return (
        <div className="report">
            <header>
                <NavHead></NavHead>
            </header>
            <div className="report">
                <h1 id='reporttitle'>Report</h1>
                <textarea id="textreport" cols=" " rows="10"></textarea>
                <div className="reportfooter">
                    <button className='btn-report'>send report</button>
                    <button id="btn-cancel" className='btn-report'>cancel</button>
                </div>    
            </div>
        </div>
    );
};

export default Report;