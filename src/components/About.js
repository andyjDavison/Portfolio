import React from "react";

function About() {
    return (
        <section className="container column" id="about-page">
            <h1 className="page-header">HELLO WORLD!</h1>
            <div className="flex--container row">
                <div className="img-stack flex-child">
                    <div className="img-stack--item" id="img--stack-bottom">
                       <img src="/assets/img_2.JPG" alt="" className="about--img"/>
                    </div>
                    <div className="img-stack--item" id="img--stack-top">
                        <img src="/assets/img_3.jpg" alt="" className="about--img"/>
                    </div>
                </div>
                <div className="about--button flex-child" id="about--right">
                    <div className="button--span">
                        <img src="/assets/github_icon.png" alt=""/>
                        <a href="https://www.github.com/andyjDavison" target="_blank" rel="noreferrer">
                            <button>Github</button>
                        </a>
                    </div>
                    <div className="button--span">
                        <img src="/assets/linkedin_icon.webp" alt=""/>
                        <a href="https://www.linkedin.com/in/davison-andrewj" target="_blank" rel="noreferrer">
                            <button>LinkedIn</button>
                        </a>
                    </div>
                    <div className="button--span">
                        <img src="/assets/pdf_icon.jpg" alt=""/>
                        <a href="/assets/ADResume.pdf" target="_blank" rel="noreferrer">
                            <button>Resume</button>
                        </a>
                    </div>
                    <div className="button--span">
                        <img src="/assets/mail_icon.jpg" alt=""/>
                        <a href="mailto:andy@thedavisonfamily.org" target="_blank" rel="noreferrer">
                            <button>Email</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;