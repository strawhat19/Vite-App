import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import About from './components/about/about';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './global.scss';

const Home = () => {
  const [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  const [devEnv, setDevenv] = useState(window.location.hostname.includes(`0`));
  const transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);
  const [pagename, setPagename] = useState(window.location.pathname.replace(`/vite-app/`, ``));
  const [aboutPaths, setAboutPaths] = useState([`about`, `/vite-app/about`, `/Vite-App/about`]);
  const [homePaths, setHomePaths] = useState([``, `home`, `/Vite-App/`, `/Vite-App/home`, `/vite-app/`]);
  const [projectPaths, setProjectPaths] = useState([`projects`, `portfolio`, `resume`, `experience`, `/Vite-App/projects`]);
  const [contactPaths, setContactPaths] = useState([`contact`, `contact-us`, `contactus`, `contactme`, `contact-me`, `/Vite-App/contact`]);

  const navigateTo = (e:any, page:any) => {
    e.preventDefault();
    window.history.pushState({}, ``, page);
    setUpdateTimer((updateTimer) => updateTimer + 1);
    setPagename(window.location.pathname.replace(`/vite-app/`, ``));
  }
  
  useEffect(() => {

    window.addEventListener(`scroll`, event => {
      transitionHeader();
      return () => window.removeEventListener(`scroll`, event => {
          transitionHeader();
      })
    })

    devEnv && pagename != `` && console.log(pagename);
    if (updateTimer == 0) {
      setUpdateTimer(updateTimer++);
    }

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
                        <a className="hoverLink" href="./about" onClick={(e) => navigateTo(e, `about`)}>About</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./projects" onClick={(e) => navigateTo(e, `projects`)}>Projects</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./contact"  onClick={(e) => navigateTo(e, `contact`)}>Contact</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./piratechs">Piratechs</a>
                    </li>
                </ul>
            </div>
        </div>
      </header>
      <div className="App" id="App">
        {pagename != `piratechs` && <div>
            <a href="https://vitejs.dev" target="_blank">
                <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`Vite logo`} width={`auto`} height={`9em`} />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <LazyLoadImage effect="blur" src={reactLogo} id={`logo`} className={`logo react`} alt={`React logo`} width={`auto`} height={`9em`} />
            </a>
        </div>}
        {homePaths.includes(pagename) && (
          <div className='home'>
              <h1>Home</h1>
          </div>
        )}
        {aboutPaths.includes(pagename) && <About />}
        {projectPaths.includes(pagename) && <Projects />}
        {contactPaths.includes(pagename) && <Contact />}
        {pagename != `piratechs` && 
          <div className="spacer">
              <button onClick={() => setUpdateTimer((updateTimer) => updateTimer + 1)}>
                  {updateTimer != 0 ? `State changed ${updateTimer} times` : `State reset to ${updateTimer}`}
              </button>
          </div>
        }
      </div>
    </Suspense>
  )
}

export default Home