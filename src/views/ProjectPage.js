import React, { Fragment } from "react";

import { projectsData } from "../data/projectsData";

import ProjectPageImagery from "../components/project-page.imagery";
import ProjectPageDescription from "../components/project-page.description";

export default function ProjectPage(props) {
  let currentProject = window.location.href.split("/");
  currentProject = currentProject[currentProject.length - 1];

  let filteredData = {};
  projectsData.forEach((project) => {
    if (
      currentProject ===
      project.name.toLowerCase().replace(/\s/g, "-").replace(/[?.]/g, "")
    ) {
      filteredData = project;
    }
  });

  return (
    <Fragment>
      <section className="section">
        <h1 className="page-header">{filteredData.name}</h1>
        <div className="page-content">
          <ProjectPageDescription
            leadProp={filteredData.lead}
            descriptionProp={filteredData.description}
            stackProp={filteredData.stack}
            urlProp={filteredData.url}
          />
        </div>
        <ProjectPageImagery imageryProp={filteredData.images} />
      </section>
    </Fragment>
  );
}
