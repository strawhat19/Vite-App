import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import '../global.scss';

const About = () => {
  let [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
    }
  }, [updateTimer, setUpdateTimer]);

  return (
    <Suspense>
      {mode != `development` && 
        <header className={show ? `scrolledHeader` : `topHeader`}>
          <div className="inner">
              <div className="navigation">
                  <a title="Home" className="homeLink" href="../">
                      <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`logo`} width={`100px`} height={`auto`} />
                  </a>
                  <ul>
                      <li className="navigation-tab">
                          <a className="current active hoverLink" href="../">Home</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="../about">About</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="../projects">Projects</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="../contact">Contact</a>
                      </li>
                      <li className="navigation-tab">
                          <a className="hoverLink" href="../piratechs">Piratechs</a>
                      </li>
                  </ul>
              </div>
          </div>
        </header>
      }
      <h1>About</h1>
    </Suspense>
  )
}

export default About