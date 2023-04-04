import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="section-info">
      <h1 className="page-header">404 Page Not Found</h1>
      <div className="page-content">
        <div className="paragraph-speaking">
          <div className="content">
            <p className="assertive">
              Oh, no! The page you're looking for is not here.
            </p>
            <p className="paragraph">
              Please accept this puppy pic as a token of my apology.
            </p>
            <p className="subtle">
              <NavLink to="/" className="link">
                Go to the Home Page
              </NavLink>
            </p>
          </div>
          <img
            src="/images/rhino.jpeg"
            className="image"
            alt="Portrait of Rhino, a very cute grey pitbull with a white horn-shaped marking on his face who has brown eyes, a black nose, and a very curious ear. "
          />
        </div>
      </div>
    </section>
  );
}
