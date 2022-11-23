import { Suspense, useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { StateContext } from '../../app';
import viteLogo from '/vite.svg';

const PageHeader = (props: any) => {

    let [show, setShow] = useState(false);
    let [mode, setMode] = useState(import.meta.env.MODE);
    const { pagename, setPageName } = useContext(StateContext);
    let transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);

    useEffect(() => {
        window.addEventListener(`scroll`, event => {
            transitionHeader();
            return () => window.removeEventListener(`scroll`, event => {
                transitionHeader();
            })
        });
    }, [pagename]);

    return (
        <Suspense>
            <header className={`pageheader ${mode} ${show ? `scrolledHeader` : `topHeader`}`}>
                <div className="inner">
                    <div className="navigation">
                        <a title="Home" className="homeLink" href="../">
                            <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`logo`} width={`100px`} height={`auto`} />
                            <h2>Vite App</h2>
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
        </Suspense>
    )
}

export default PageHeader