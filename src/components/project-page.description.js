// TODO: move h1 into project page view

import React, { Fragment } from "react";

export default function ProjectPageDescription(props) {
  const description = props.descriptionProp.map((item, index) => {
    return (
      <p key={btoa(index)} className="paragraph">
        {item}
      </p>
    );
  });

  return (
    <Fragment>
      <h1 className="h1">{props.nameProp}</h1>
      <div className="br">
        {description}
        {props.stackProp && <p className="subtle">{props.stackProp}</p>}
        {props.urlProp && (
          <p className="subtle">
            <a
              href={props.urlProp}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              View Website
            </a>
          </p>
        )}
      </div>
    </Fragment>
  );
}
