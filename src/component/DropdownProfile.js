import React, { useRef, useState } from "react";
import "./DropdownProfile.scoped.css";
import {BiLogOut,BiUserCircle} from "react-icons/bi";
import Avatar from "./Avatar";
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = "https://kykxspcgnsbnzvbofapj.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl,supabaseKey);


function DropdownProfile(){

    const sign__out = () =>{
        supabase.auth.signOut();
    }

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
                    <li><BiLogOut size={20} className="icon-logOut"/><a href="/home" id="logout" onClick={sign__out}>Log out</a></li>
                </ul>
           </div>
           }
        </div>

        
    );
};


export default DropdownProfile;