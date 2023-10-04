import React, { useRef, useState,useContext } from "react";
import "./DropdownProfile.scoped.css";
import {BiLogOut,BiUserCircle} from "react-icons/bi";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { General } from '../App';

// const supabaseUrl = "https://kykxspcgnsbnzvbofapj.supabase.co";
// const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl,supabaseKey);



function DropdownProfile(){
    const {supabase_for_use : supabase,session,user} = useContext(General);

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
                    {/* <Link to={`/profile/${user.id}`}><li><BiUserCircle className="icon-profile" size={20}/>My profile</li></Link> */}
                    <Link to={'/profile'}><li><BiUserCircle className="icon-profile" size={20}/>My profile</li></Link>
                    <li><BiLogOut size={20} className="icon-logOut"/><a href="/home" id="logout" onClick={sign__out}>Log out</a></li>
                </ul>
           </div>
           }
        </div>

        
    );
};


export default DropdownProfile;