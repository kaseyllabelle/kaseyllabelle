// TODO: update page titles

import React, { useReducer, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";

import { appReducer } from "./context/reducer";
import { initialAppContext } from "./context/initializers";
import { CURRENT_PAGE } from "./context/constants";

import Home from "./views/Home";
import ProjectPage from "./views/ProjectPage";
import Info from "./views/Info";
import PageNotFound from "./views/PageNotFound";
import Logo from "./components/logo";

export const appContext = React.createContext(initialAppContext);

const App = () => {
  const [appStore, appStoreDispatch] = useReducer(
    appReducer,
    initialAppContext
  );

  useEffect(() => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: window.location.href });
  }, []);

  useEffect(() => {
    window.onpopstate = function (event) {
      appStoreDispatch({ type: CURRENT_PAGE, payload: window.location.href });
    };
    // eslint-disable-next-line
  }, [window.location.href]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const body = document.body;
    const appContainer = document.getElementById("appContainer");
    const menu = document.getElementById("menu");

    body.classList.toggle("menu-is-open", isMenuOpen);

    if (!isMenuOpen) {
      appContainer.removeAttribute("inert");
      menu.setAttribute("inert", "true");
    } else if (isMenuOpen) {
      appContainer.setAttribute("inert", "true");
      menu.removeAttribute("inert");
    }
  }, [isMenuOpen]);

  return (
    <appContext.Provider value={{ appStore, appStoreDispatch }}>
      <BrowserRouter>
        <div id="appContainer" className="app-container">
          <header className="app-header">
            <Link to="/" alt="Kasey L. Labelle Home Page" className="cta-logo">
              <Logo />
            </Link>
            <button
              type="button"
              className="cta-icon menu-toggle"
              aria-label="Open navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="icon"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z"
                />
              </svg>
            </button>
          </header>
          <nav className="nav-primary">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/info"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                >
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/documents/kaseyllabelle_resume.pdf"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://goo.gl/forms/fcvTryc6Pryrxjfj2"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <main className="app-main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/project/:name" element={<ProjectPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <small className="subtle">
              &copy; {new Date().getFullYear()} Kasey L. Labelle
            </small>
          </footer>
        </div>
        <div id="menu" className="nav-on-canvas">
          <button
            type="button"
            className="cta-icon menu-toggle collapsed"
            aria-label="Close navigation"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              toggleMenu();
            }}
          >
            <svg
              className="icon"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M326.6 166.6L349.3 144 304 98.7l-22.6 22.6L192 210.7l-89.4-89.4L80 98.7 34.7 144l22.6 22.6L146.7 256 57.4 345.4 34.7 368 80 413.3l22.6-22.6L192 301.3l89.4 89.4L304 413.3 349.3 368l-22.6-22.6L237.3 256l89.4-89.4z"
              />
            </svg>
          </button>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  onClick={toggleMenu}
                >
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/info"
                  className={({ isActive }) =>
                    isActive ? "link active" : "link"
                  }
                  onClick={toggleMenu}
                >
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <Link
                  to="/documents/kaseyllabelle_resume.pdf"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://goo.gl/forms/fcvTryc6Pryrxjfj2"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </BrowserRouter>
    </appContext.Provider>
  );
};

export default App;