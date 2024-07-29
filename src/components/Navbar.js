import React, { useEffect } from "react";

function Navbar() {

    //const [show, setShow] = useState(false);
  
    const controlNavbar = () => {
      if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) { // if scroll down show the navbar
        //console.log("scrolled down");
        //setShow(true);
        document.getElementById("nav").style.top = "0px";
      } else { // if scroll up hide the navbar
        document.getElementById("nav").style.top = "-100px"; 
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', controlNavbar);
  
      // cleanup function
      return () => {
         window.removeEventListener('scroll', controlNavbar);
      };
    }, []);

    return(
        // <nav id="nav" style={{"top": `${show ? 'active' : 'hidden'}`}}>
        <nav id="nav">
            <a href="#home-page" className="nav-item name">ANDREW DAVISON</a>
            <a href="#education-page" className="nav-item">EDUCATION</a>
            <a href="#projects-page" className="nav-item">PROJECTS</a>
            <a href="#about-page" className="nav-item">ABOUT</a>
            <img src="./Portfolio/assets/img_1.jpg" alt="" className="nav-img"/>
        </nav>
    )
}

export default Navbar