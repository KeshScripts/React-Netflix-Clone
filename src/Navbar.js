import React, {useState, useEffect} from "react";
import "./Navbar.css"


const Navbar = () => {
  const [show, handleShow] = useState(false)
  
  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50){
        handleShow(true)
      }else{
        handleShow(false)
      }
    }) 
  })
  
 return (
    <div className= {`Nav ${show && "Nav_black"} `}>
        <img className='Nav_logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix_logo"/>
        <img
          className ="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix_logo"/>
    </div>
 )}
  
  
  export default Navbar;