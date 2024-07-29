import React from "react";
import Typewriter from "typewriter-effect"

const styles = {
   backgroundImage: "url('/assets/black.jpg')"
};

function Home() {
   return(
      <section id="home-page" style={styles}>
         <div className="home-page--text">
            <Typewriter className="home-page--text" onInit={(typewriter) => {
               typewriter.pasteString('<p>Microsoft Windows [Version 10.0.19045.4529]<br>(c) Andrew Davison. All rights reserved.<br><p>')
               .pasteString("C:\\Users\\andyD> ")
               .pauseFor(5000)
               .typeString("cat Hello.txt")
               .pasteString("<p>Welcome to my Website!<br>My name is Andrew Davison, and this is my portfolio!<br>Scroll down to see it...</p>")
               .pasteString("C:\\Users\\andyD> ")
               .pauseFor(2500)
               .typeString("ls")
               .pasteString("<pre>About.md &nbsp; &nbsp; &nbsp; &nbsp; Education.md &nbsp; &nbsp; &nbsp; &nbsp; Projects.md<pre>")
               .pasteString("C:\\Users\\andyD> ")
               .pauseFor(10000)
               .start()
            }} options={{
               loop: true,
               cursor: '_',
               deleteSpeed: 1
            }}/>
         </div>
      </section>
   )
}

export default Home;