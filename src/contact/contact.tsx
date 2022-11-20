import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import Icons from '../components/icons/icons';
import viteLogo from '/vite.svg';
import '../global.scss';
import Banner from '../components/banner/banner';

const Contact = () => {
  let [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  let transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
    }
    
    window.addEventListener(`scroll`, event => {
      transitionHeader();
      return () => window.removeEventListener(`scroll`, event => {
          transitionHeader();
      })
    });
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
      {mode == `production` && <Banner />}
      <main className={`App${mode == 'production' ? 'content' : ''}`} id="App">
        {mode == `production` && <Icons />}
        <h1>Contact</h1>
      </main>
    </Suspense>
  )
}

export default Contact