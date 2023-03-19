// TODO: reduce to single menu trigger w/ inert?

import React, { useReducer, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

import { appReducer } from './context/reducer';
import { initialAppContext } from './context/initializers';
import { CURRENT_PAGE } from './context/constants'

import Home from './views/Home';
import ProjectPage from './views/ProjectPage';
import Info from './views/Info';
import PageNotFound from './views/PageNotFound';
import Logo from './components/logo';
import IconMenu from './components/icon.menu';
import IconClose from './components/icon.close';

export const appContext = React.createContext(initialAppContext);

const App = () => {
  const [ appStore, appStoreDispatch ] = useReducer(appReducer, initialAppContext);

  useEffect(() => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: window.location.href });
  }, []);

  useEffect(() => {
    window.onpopstate = function(event) {
      appStoreDispatch({ type: CURRENT_PAGE, payload: window.location.href });
    };
    // eslint-disable-next-line
  }, [window.location.href]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const body = document.body;
    const appContainer = document.getElementById('appContainer');
    const menu = document.getElementById('menu');

    body.classList.toggle('menu-is-open', isMenuOpen);

    if (!isMenuOpen) {
      appContainer.removeAttribute('inert');
      menu.setAttribute('inert', 'true');
    } else if (isMenuOpen) {
      appContainer.setAttribute('inert', 'true');
      menu.removeAttribute('inert');
    }
  },[isMenuOpen])

  return (
    <appContext.Provider value={{ appStore, appStoreDispatch }}>
      <BrowserRouter>
        <div id="appContainer" className="app-container">
          <header className="app-header">
            <Link to="/" alt="Kasey L. Labelle Home Page" className="cta-logo">
              <Logo/>
            </Link>
            <button 
              type="button" 
              className="cta-icon menu-toggle"
              aria-label="Open navigation" 
              onClick={()=> setIsMenuOpen(!isMenuOpen)}
            >
              <IconMenu/>
            </button>
          </header>
          <nav className="nav-xl">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/info" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <Link 
                  to="/documents/kaseyllabelle_resume.pdf" 
                  className="nav-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <a 
                  href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" 
                  className="nav-link" 
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
              &copy; {(new Date().getFullYear())} Kasey L. Labelle
            </small>
          </footer>
        </div>
        <div id="menu" className="nav-on-canvas">
          <button 
            type="button" 
            className="cta-icon menu-toggle collapsed"
            aria-label="Close navigation" 
            onClick={() => { setIsMenuOpen(!isMenuOpen); toggleMenu();}}
          >
            <IconClose/>
          </button>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                  onClick={toggleMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/info" 
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
                  onClick={toggleMenu}
                >
                  Info
                </NavLink>
              </li>
              <li className="nav-item">
                <Link 
                  to="/documents/kaseyllabelle_resume.pdf" 
                  className="nav-link" 
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
                  className="nav-link" 
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
  )
}

export default App;