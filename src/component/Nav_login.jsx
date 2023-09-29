import React,{useState, useRef} from 'react';
import "./Nav.scoped.css"
import { Link } from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser,AiFillCloseSquare,FaSearch} from 'react-icons/ai'
import DropdownProfile from './DropdownProfile';
import e from 'cors';
import {BsFillCaretDownFill} from "react-icons/bs";

// Responsive Navbar

function NavLogin() {

    //  Code to toggle Navbar
    const [active, setActive] = useState('menu_content')
    const showNav = ()=>{
        setActive('menu_content activeMenu') 
    }
    const removeNav = ()=>{
        setActive('menu_content') 
    }

    // Code to show search
    const [show, setShow] = useState('search_blog')
    const showSearch = ()=>{
        setShow('search_blog activeSearch') 
    }
    const removeSearch = ()=>{
        setShow('search_blog') 
    }

    const [open,setOpen] = useState(false)
    // ให้คลิกข้างนอกแล้ว Dropdown ก็ถือว่าปิด
    const dropDownRef = useRef();
    const dropRef = useRef();

    window.addEventListener('click', (e)=>{
        if(e.target !== dropDownRef.current && e.target !== dropRef.current ){
            setOpen(false);
        }
    })

    return(
        <header className="Navbar">
            <div className="logo">
                <img id="logo" src="/DekHor.png" alt="" />
            </div>
            <AiOutlineSearch id="search_icon" size={25} onClick={showSearch}/>
            <div className={show}>
                <form action="#" className='search-box'>
                    <AiOutlineSearch id="search-icon" size={25}/>
                    <input type="text" placeholder='Search...' />
                    <AiOutlineClose id="close-icon" size={20} onClick={removeSearch}/>
                </form>
            </div>
            <div className={active} >
                <li>
                    <a className="navigation" href="/home">Home</a>
                </li>
                <li>
                    <a className="drop" ref={dropRef} onClick={()=> setOpen(!open)} href="#">Categories<BsFillCaretDownFill size={10} className='icon'/></a>
                    { open &&
                        <div className="Dropdown" ref={dropDownRef}>
                            <li><a className="navigation2" href="/decoration">Decoration</a></li>
                            <li><a className="navigation2" href="/cleaning">Cleaning</a></li>
                            <li><a className="navigation2" href="/cooking">Cooking</a></li>
                            <li><a className="navigation2" href="/story">Story's DekHor</a></li>
                        </div>
                    }
                </li>
                <li>
                    <a className="navigation" href="/writeblog">Blog</a>
                </li>
                <li>
                    <a className="navigation" href="/contact">Contact</a>
                </li>
                <li>
                    <div className="login_blog">
                        <DropdownProfile/>
                    </div>
                </li>
                <div className="closeNavBar" onClick={removeNav} >
                    <AiFillCloseSquare size={25} id='closeicon' />
                </div>
            </div>
            <AiOutlineMenu size={25} id='menu-icon' onClick={showNav}/>
            
        </header>
    );
};
export default NavLogin;