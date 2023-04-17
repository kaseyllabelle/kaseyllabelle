import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const linkTo = `/project/${props.name.toLowerCase().replace(/\s/g, "-")}`;
  const projectName = props.name;

  return (
    <>
      <div className="project-card">
        <div className="project-card-content">
          {/* {props.tag && (
            <b className="project-card-tag">{props.tag}</b>
          )} */}
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
          {props.lead && (
            <p className="project-card-description">{props.lead}</p>
          )}
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
