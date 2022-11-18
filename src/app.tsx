import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import Piratechs from './piratechs/piratechs';
import Icons from './components/icons/icons';
import Projects from './projects/projects';
import Contact from './contact/contact';
import About from './about/about';
import viteLogo from '/vite.svg';
import './global.scss';

const App = () => {
  let [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  let [devEnv, setDevEnv] = useState(window.location.hostname.includes(`0`));
  let transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);
  let [pagename, setPageName] = useState(window.location.pathname.replace(`/vite-app/`, ``));
  let [aboutPaths, setAboutPaths] = useState([`about`, `/vite-app/about`, `/Vite-App/about`]);
  let [homePaths, setHomePaths] = useState([``, `home`, `/Vite-App/`, `/Vite-App/home`, `/vite-app/`]);
  let [piratechsPaths, setPiratechsPaths] = useState([`piratechs`, `piratechs/`, `/Vite-App/piratechs`]);
  let [projectPaths, setProjectPaths] = useState([`projects`, `portfolio`, `resume`, `experience`, `/Vite-App/projects`]);
  let [contactPaths, setContactPaths] = useState([`contact`, `contact-us`, `contactus`, `contactme`, `contact-me`, `/Vite-App/contact`]);

  let navigateTo = (page:any, clickEvent:any) => {
    clickEvent.preventDefault();
    window.history.pushState({}, ``, page);
    updateTimer != 0 && setPageChanged(true);
    setUpdateTimer((updateTimer) => updateTimer + 1);
    setPageName(window.location.pathname.replace(`/vite-app/`, ``));
  }
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
      if (devEnv || mode == `development`) document.title = `Vite App Dev`;
      if (devEnv && mode == `production`) document.title = `Vite App Build`;
    };
    
    window.addEventListener(`scroll`, event => {
      transitionHeader();
      return () => window.removeEventListener(`scroll`, event => {
          transitionHeader();
      })
    });
  }, [updateTimer, setUpdateTimer]);

  return (
    <Suspense>
      <header className={show ? `scrolledHeader` : `topHeader`}>
        <div className="inner">
            <div className="navigation">
                <a title="Home" className="homeLink" href="./">
                    <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`logo`} width={`100px`} height={`auto`} />
                </a>
                <ul>
                    <li className="navigation-tab">
                        <a className="current active hoverLink" href="./">Home</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./about" onClick={(e) => (devEnv || mode == `development`) && navigateTo(`about`, e)}>About</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./projects" onClick={(e) => (devEnv || mode == `development`) && navigateTo(`projects`, e)}>Projects</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./contact"  onClick={(e) => (devEnv || mode == `development`) && navigateTo(`contact`, e)}>Contact</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./piratechs" onClick={(e) => (devEnv || mode == `development`) && navigateTo(`piratechs`, e)}>Piratechs</a>
                    </li>
                </ul>
            </div>
        </div>
      </header>
      <div className="App" id="App">
        <Icons />
        {homePaths.includes(pagename) && (
          <div className='home'>
              <h1>Home</h1>
          </div>
        )}
        {aboutPaths.includes(pagename) && <About />}
        {projectPaths.includes(pagename) && <Projects />}
        {contactPaths.includes(pagename) && <Contact />}
        {piratechsPaths.includes(pagename) && <Piratechs />}
        <div className="spacer">
            <button onClick={(e) => setUpdateTimer((updateTimer) => updateTimer + 1)}>
                {updateTimer != 0 ? `State changed ${updateTimer} times` : `State reset to ${updateTimer}`}
            </button>
        </div>
      </div>
    </Suspense>
  )
}

export default App