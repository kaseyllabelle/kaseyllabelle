import React, { useContext, useState, Fragment } from "react";

import { appContext } from "../App";
import { CURRENT_PAGE, CURRENT_FILTER } from "../context/constants";

import { projectsData } from "../data/projectsData";

import Filters from "../components/home.filters";
import Card from "../components/home.card";

export default function Home(props) {
  const { appStore, appStoreDispatch } = useContext(appContext);
  const [currentFilter, setCurrentFilter] = useState(appStore.currentFilter);

  const goToPageFn = (page) => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: "projects" });
  };

  const filterProjectsFn = (filter) => {
    setCurrentFilter(filter);
    appStoreDispatch({ type: CURRENT_FILTER, payload: filter });
  };

  const projects = projectsData.filter((project) => {
    if (currentFilter === "All") {
      return projectsData;
    }
    return project.filter.includes(currentFilter);
  });

  const filteredProjects = projects.map((project) => {
    return <Card key={project.id} {...project} onClickProp={goToPageFn} />;
  });

  return (
    <Fragment>
      <section className="section-work">
        <h1 className="page-header">Work</h1>
        <div className="page-content page-content-projects">
          <Filters
            filterProjectsProp={filterProjectsFn}
            currentFilterProp={currentFilter}
          />
          <div className="projects">{filteredProjects}</div>
        </div>
      </section>
    </Fragment>
  );
}
