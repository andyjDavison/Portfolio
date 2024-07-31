import React from "react";
import Typewriter from "typewriter-effect"

const styles = {
   backgroundImage: "url('/assets/black.jpg')"
};

function Home() {
   return(
      <section id="home--page" style={styles}>
         <div className="home-page--text">
            <Typewriter className="home-page--text" onInit={(typewriter) => {
               typewriter.pasteString('<p>Andrew Davison\'s Website [Version 10.0.19045.4529]<br>(c) Andrew Davison. All rights reserved.<br><p>')
               .pasteString("C:\\Users\\andyD\\Portfolio> ")
               .pauseFor(5000)
               .typeString("dir .")
               .pasteString("<p> Volume in drive C is Windows-SSD<br> Volume Serial Number is 123A-4B5C<br><br> Directory of C:\\Users\\andyD\\Portfolio<br><br>07/27/2024 08:43 PM &emsp; &lt'DIR'&gt &emsp; &emsp; .<br>07/27/2024 08:43 PM &emsp; &lt'DIR'&gt &emsp; &emsp; ..<br>07/27/2024 08:43 PM &emsp; &emsp; &emsp; &nbsp;&nbsp; 124 &nbsp;Hello.txt<p>")
               .pasteString("C:\\Users\\andyD\\Portfolio> ")
               .typeString("Type Hello.txt")
               .pasteString("<p>Welcome to my Website!<br>My name is Andrew Davison, and this is my portfolio!<br>Keep scrolling down to check it out!</p>")
               .pauseFor(2500)
               .pasteString("C:\\Users\\andyD\\Portfolio> ")
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