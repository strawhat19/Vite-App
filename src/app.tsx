import piratechsBanner from './assets/PiratechsBanner.jpeg';
import { Suspense, useEffect, useState } from 'react';
export const StateContext = createContext<any>({});
import Header from './components/header/header';
import Banner from './components/banner/banner';
import Piratechs from './piratechs/piratechs';
import Icons from './components/icons/icons';
import Projects from './projects/projects';
import Contact from './contact/contact';
import { createContext } from 'react';
import About from './about/about';
import './global.scss';

const App = () => {
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  let [devEnv, setDevEnv] = useState(window.location.hostname.includes(`0`));
  let [pagename, setPageName] = useState(window.location.pathname.replace(`/vite-app/`, ``));
  let [aboutPaths, setAboutPaths] = useState([`about`, `/vite-app/about`, `/Vite-App/about`]);
  let [homePaths, setHomePaths] = useState([``, `home`, `/Vite-App/`, `/Vite-App/home`, `/vite-app/`]);
  let [piratechsPaths, setPiratechsPaths] = useState([`piratechs`, `piratechs/`, `/Vite-App/piratechs`]);
  let [projectPaths, setProjectPaths] = useState([`projects`, `portfolio`, `resume`, `experience`, `/Vite-App/projects`]);
  let [contactPaths, setContactPaths] = useState([`contact`, `contact-us`, `contactus`, `contactme`, `contact-me`, `/Vite-App/contact`]);

  const capitalizeAllWords = (string: any) => {
    if (string != null || string != undefined) {
      return string.replace(`  `,` `).split(` `).map((word: any) => word?.charAt(0)?.toUpperCase() + word?.slice(1).toLowerCase()).join();
    }
  };
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
      if (devEnv || mode == `development`) document.title = `Vite App Dev`;
      if (devEnv && mode == `production`) document.title = `Vite App Build`;
    };
  }, [updateTimer, setUpdateTimer]);

  return (
    <StateContext.Provider value={{pagename, setPageName, capitalizeAllWords}}>
      <Suspense>
        <Header />
        <Banner bannerBG={piratechsBanner} />
        <main className="App content" id="App">
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
        </main>
      </Suspense>
    </StateContext.Provider>
  )
}

export default App