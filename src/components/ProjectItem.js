import React from "react";

function ProjectItem(props) {
    return(
        <div className="project--item">
            <img className="project--item-img" src={props.imgSource} alt=""/>
            <div className="project--item-container container column">
                <div className="project--item-info">
                    <h2 className="project--header">{props.header}</h2>
                    <p className="project--desc">{props.desc}</p>
                    <a href={props.link} target="_blank" rel="noreferrer"><button>Code</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem