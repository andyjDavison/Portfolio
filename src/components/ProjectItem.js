import React from "react";

function ProjectItem(props) {
    return(
        <div className="project--item">
            <img className="project--item-img" src={props.imgSource} alt=""/>
            <div className="project--item-desc">
                <div>
                    <h2 className="project--item-header">{props.header}</h2>
                    <p className="project--item-desc">{props.desc}</p>
                    <br></br>
                    <a href={props.link} target="_blank" rel="noreferrer">Repo</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem