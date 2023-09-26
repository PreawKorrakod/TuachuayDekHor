import "./Menu.scoped.css";
import React,{useState} from "react";


function  Slidebar() {

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class,SetMenuClass] = useState("menu hidden")
  const [menu_close,SetCloseClass] = useState("Close hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [isCloseClicked, setIsCloseClicked] = useState(false)

  const updateMenu = () =>{
    if(!isMenuClicked){
      setBurgerClass("burger-bar clicked")
      SetMenuClass("menu visible")
      SetCloseClass("Close visible")

    }
    else{
      setBurgerClass("burger-bar unclicked")
      SetMenuClass("menu hidden")
      SetCloseClass("Close hidden")
    }
    setIsMenuClicked(!isMenuClicked)
    setIsCloseClicked(!isCloseClicked)
  }

  return(
    <div className="Slidebar">
      <div className={menu_class}>
        <img id="close-menu" className={menu_close} src="/close-outline.svg" alt="" onClick={updateMenu} />
      </div>
      <nav>
        <div className="burger-menu">
          <img id="menubar" className={burger_class} src="/menu.svg" alt="" onClick={updateMenu} />
        </div>
      </nav> 
    </div>
  );
};

export default Slidebar;