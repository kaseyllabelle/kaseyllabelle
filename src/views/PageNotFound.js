import React from 'react';
import { NavLink } from 'react-router-dom';

export default function PageNotFound()
{
  return(
    <section className="section-404">
      <h1 className="h1">404 Page Not Found</h1>
      <div className="br">
        <p className="paragraph">
          The page you're looking for is not here. Please accept this puppy pic as a token of my apology.
        </p>
        <p className="subtle">
          <NavLink to="/" className="cta-link">
            Go to the Home Page
          </NavLink>
        </p>
      </div>
      <div className="tl">
        <img src="/images/rhino.jpeg" className="image" alt="Portrait of Rhino, a very cute grey pitbull with a white horn-shaped marking on his face who has brown eyes, a black nose, and a very curious ear. "/>
      </div>
    </section>
  )
}