import React, { useReducer, useEffect } from "react";
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

  return (
    <appContext.Provider value={{ appStore, appStoreDispatch }}>
      <BrowserRouter>
        <div id="appContainer" className="app-container">
          <header className="app-header">
            <Link to="/" alt="Kasey L. Labelle Home Page" className="cta-logo">
              <Logo />
            </Link>
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
      </BrowserRouter>
    </appContext.Provider>
  );
};

export default App;
