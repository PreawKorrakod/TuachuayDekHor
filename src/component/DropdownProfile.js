import React, { useRef, useState } from "react";
import User from "../Assets/User.png"
import "./DropdownProfile.scoped.css";
import {BiLogOut,BiUserCircle} from "react-icons/bi";

function DropdownProfile(){

    const[open,setOpen] = useState(false)

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e)=>{
        if(e.target !== menuRef.current && e.target !== imgRef.current){
            setOpen(false);
        }
    })
    return(
        <div className="profile">
           <img ref={imgRef}src={User} alt="" className="User__profile" onClick={()=>setOpen(!open)} />
           {open && 
           <div className="menus" ref={menuRef} onClick={()=>setOpen(!open)}>
                <ul>
                    <li><a href="/profile"><BiUserCircle className="icon-profile" size={25}/>My profile</a></li>
                    <li><a href="/home" id="logout"><BiLogOut size={25} className="icon-logOut"/>Log out</a></li>
                </ul>
           </div>
           }
        </div>

        
    );
};


export default DropdownProfile;