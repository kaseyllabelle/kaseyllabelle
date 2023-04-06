import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="section">
      <h1 className="page-header">404 Page Not Found</h1>
      <div className="page-content">
        <p className="assertive">
          Oh, no! The page you're looking for is not here.
        </p>
        <p className="paragraph">
          Please accept this puppy pic as a token of my apology.
        </p>
        <p className="subtle">
          <NavLink to="/" className="link">
            Go to the home page
          </NavLink>
        </p>
      </div>
      <img
        src="/images/rhino.jpeg"
        className="page-media image decorative-treatment"
        alt="Portrait of Rhino, a very cute grey pitbull with a white horn-shaped marking on his face who has brown eyes, a black nose, and a very curious ear. "
      />
    </section>
  );
}
