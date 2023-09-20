import "./Report.css";
import { Link } from "react-router-dom";
const Report = () =>{
    return (
        <div className="report">
            <h1 id="report-h1">Report</h1>
            <div className="input-report">
                <textarea rows={10} id="typereport" type="text" placeholder="type your problem..." />
                <Link id="send-1"to="/home" className="button">Send Report</Link>
            </div>
            
        </div>
    );
};

export default Report;