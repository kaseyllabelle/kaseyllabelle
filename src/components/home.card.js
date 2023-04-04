import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const linkTo = `/project/${props.name.toLowerCase().replace(/\s/g, "-")}`;
  const projectName = props.name;

  return (
    <>
      {/* <Link
      to={linkTo}
      onClick={() => {
        props.onClickProp(props.name);
      }}
      className="project-card"
    >
      <div className="project-card-content">
        <b className="project-card-tag">Design system</b>
        <p className="project-card-name">{props.name}</p>
        <p className="project-card-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <img
        src={props.featuredImage}
        alt={props.name}
        className="project-card-image"
      />
    </Link> */}
      <div className="project-card">
        <div className="project-card-content">
          <b className="project-card-tag">{props.tag}</b>
          <Link
            to={linkTo}
            onClick={() => {
              props.onClickProp(props.name);
            }}
            className="project-card-name"
            data-text={projectName}
          >
            {props.name}
          </Link>
          <p className="project-card-description">{props.lead}</p>
        </div>
        <img
          src={props.featuredImage}
          alt={props.name}
          className="project-card-image"
        />
      </div>
    </>
  );
}
