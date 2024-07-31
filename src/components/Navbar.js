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
          <div id="nav--left">
            <a href="#home-page" className="nav--item">ANDREW DAVISON</a>
            <img src="/assets/img_1.jpg" alt="" id="nav--img"/>
          </div>
          <div id="nav--right">
            <a href="#about-page" className="nav--item">ABOUT</a>
            <a href="#projects-page" className="nav--item">PROJECTS</a>
            <a href="#education-page" className="nav--item">EDUCATION</a>
          </div>  
        </nav>
    )
}

export default Navbar