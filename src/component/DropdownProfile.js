import React, { useRef, useState } from "react";
import "./DropdownProfile.scoped.css";
import {BiLogOut,BiUserCircle} from "react-icons/bi";
import Avatar from "./Avatar";

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
           <img ref={imgRef} src={Avatar} alt="" className="User__profile" onClick={()=>setOpen(!open)} />
           {open && 
           <div className="menus" ref={menuRef} onClick={()=>setOpen(!open)}>
                <ul>
                    <li><BiUserCircle className="icon-profile" size={20}/><a href="/profile">My profile</a></li>
                    <li><BiLogOut size={20} className="icon-logOut"/><a href="/home" id="logout">Log out</a></li>
                </ul>
           </div>
           }
        </div>

        
    );
};


export default DropdownProfile;