import React from "react";

function Education() {
    return(
        <section className="container column" id="education-page">
            <h1 className="page-header">EDUCATION</h1>
                <div className="container row" id="education-title">
                    <img src="/assets/university_img.png" alt=""/>
                    <div className="container column" id="school-info">
                        <h2>University of South Carolina</h2>
                        <h3>B.S.C.S. of Computer Science</h3>
                    </div>
                </div>
                <div className="container row" style={{width: '100%'}}>
                    <div id="coursework" style={{width: '100%'}}>
                        <div>
                            <p>Computer Science</p>
                            <ul>
                                <li>Algorithmic Design I(CSCE 145)</li>
                                <li>Algorithmic Design II(CSCE 146)</li>
                                <li>Computing in the Modern World(CSCE 190)</li>
                                <li>UNIX/Linux Fundamentals(CSCE 215)</li>
                                <li>Digital Logic Design(CSCE 211)</li>
                                <li>Advanced Programming Techniques(CSCE 240)</li>
                                <li>Intro. to Computer Architecture(CSCE 212)</li>
                                <li>Software Engineering(CSCE 247)</li>
                                <li>Operating Systems(CSCE 311)</li>
                                <li>Programming Language Structures(CSCE 330)</li>
                                <li>Data Structures & Algorithms(CSCE 350)</li>
                                <li>Introduction to Computer Networks(CSCE 416)</li>
                                <li>Foundations of Computation(CSCE 355)</li>
                            </ul>
                        </div>
                        <div>
                            <p>Math</p>
                            <ul>
                                <li>Calculus I(MATH 141)</li>
                                <li>Calculus II(MATH 142)</li>
                                <li>Discrete Structures(MATH 374)</li>
                                <li>Vector Calculus(MATH 241)</li>
                                <li>Applied linear Algebra(MATH 344)</li>
                                <li>Statistics for Engineers(STAT 509)</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Education