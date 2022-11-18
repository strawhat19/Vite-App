// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// // import * as ReactDOM from 'react-dom/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import '../global.scss';

const Piratechs = () => {
  let [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  let [pagename, setPageName] = useState(window.location.pathname.replace(`/vite-app/`, ``));

  let navigateTo = (page:any, clickEvent:any) => {
    clickEvent.preventDefault();
    window.history.pushState({}, ``, page);
    updateTimer != 0 && setPageChanged(true);
    setUpdateTimer((updateTimer) => updateTimer + 1);
    setPageName(window.location.pathname.replace(`/vite-app/`, ``));
  }
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      console.log(`PIRATECHS`);
      setUpdateTimer(updateTimer++);
    }
  }, [updateTimer, setUpdateTimer]);

  return (
    <Suspense>
      {mode != `development` && 
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
                          <a className="hoverLink" href="./about" onClick={(e) => navigateTo(`about`, e)}>About</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="./projects" onClick={(e) => navigateTo(`projects`, e)}>Projects</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="./contact"  onClick={(e) => navigateTo(`contact`, e)}>Contact</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="./piratechs" onClick={(e) => mode == `development` && navigateTo(`piratechs`, e)}>Piratechs</a>
                      </li>
                  </ul>
              </div>
          </div>
        </header>
      }
      <div className="App" id="App">
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`Vite logo`} width={`auto`} height={`9em`} />
            </a>
        </div>
        <h1>Piratechs</h1>
      </div>
    </Suspense>
  )
}

export default Piratechs

// ReactDOM.render(
//   <React.StrictMode>
//     <Piratechs />
//   </React.StrictMode>,
//   document.getElementById('root') as HTMLElement
// )

// ReactDOM.createRoot(document.getElementById('App') as HTMLElement).render(
//   <React.StrictMode>
//     <Piratechs />
//   </React.StrictMode>
// )

// ReactDOM.hydrateRoot(document.getElementById('App') as HTMLElement, 
//   <React.StrictMode>
//     <Piratechs />
//   </React.StrictMode>
// )