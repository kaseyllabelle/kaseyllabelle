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
      {description}
      {props.stackProp && (
        <p className="subtle">Created with: {props.stackProp}</p>
      )}
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
    </Fragment>
  );
}
