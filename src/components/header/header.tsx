import { Suspense, useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StateContext } from '../../app';
import viteLogo from '/vite.svg';

const Header = (props: any) => {

    let state = useContext(StateContext);
    let [show, setShow] = useState(false);
    let [updateTimer, setUpdateTimer] = useState(0);
    let [pageChanged, setPageChanged] = useState(false);
    let [mode, setMode] = useState(import.meta.env.MODE);
    const {pagename, setPageName} = useContext(StateContext);
    let [devEnv, setDevEnv] = useState(window.location.hostname.includes(`0`));
    let transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);

    let navigateTo = (page:any, clickEvent:any) => {
        clickEvent.preventDefault();
        window.history.pushState({}, ``, page);
        updateTimer != 0 && setPageChanged(true);
        setUpdateTimer((updateTimer) => updateTimer + 1);
        setPageName(window.location.pathname.replace(`/vite-app/`, ``));
    }

    useEffect(() => {
        console.log(`pagename`, pagename, `state`, state.pagename);
        window.addEventListener(`scroll`, event => {
          transitionHeader();
          return () => window.removeEventListener(`scroll`, event => {
              transitionHeader();
          })
        });
      }, [pagename]);

    return (
        <Suspense>
            <header className={`mainheader ${mode} ${show ? `scrolledHeader` : `topHeader`}`}>
                <div className="inner">
                    <div className="navigation">
                        <a title="Home" className="homeLink" href="./">
                            <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`logo`} width={`100px`} height={`auto`} />
                            <h2>Vite App</h2>
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
                                <a className="hoverLink" href="./contact" onClick={(e) => (devEnv || mode == `development`) && navigateTo(`contact`, e)}>Contact</a>
                            </li>
                            <li className="navigation-tab">
                                <a className="hoverLink" href="./piratechs" onClick={(e) => (devEnv || mode == `development`) && navigateTo(`piratechs`, e)}>Piratechs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </Suspense>
    )
}

export default Header