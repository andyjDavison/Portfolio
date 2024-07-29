import React from "react";
import About from "./About.js";
import Education from "./Education.js"
import Projects from "./Projects.js";
import Footer from "./Footer.js";

function Portfolio() {
    return(
        <div>
            <About />
            <Projects />
            <Education />
            <Footer />
        </div>
    )
}

export default Portfolio