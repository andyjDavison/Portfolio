import React from "react";

function Footer() {
    return(
        <section className="container column" id="footer">
            <p id="copyright">Copyright © 2024 Andrew Davison.</p>
            <div id="social-container">
                <a href="https://www.linkedin.com/in/davison-andrewj/" target="_blank" rel="noreferrer">LinkedIn</a>
                <span>•</span>
                <a href="https://www.github.com/andyjdavison" target="_blank" rel="noreferrer">Github</a>
                <span>•</span>
                <a href="mailto:ajd8@email.sc.edu" target="_blank" rel="noreferrer">Email</a>
            </div>
        </section>
    )
}

export default Footer