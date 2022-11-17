import './header.scss';
import { useEffect, useState } from 'react';
import viteLogo from '../../assets/vite.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header: React.FC<any> = () => {

    const [show, setShow] = useState<any>(false);
    const transitionHeader = () => window.scrollY > 100 ? setShow(true) : setShow(false);

    useEffect(() => {
        window.addEventListener(`scroll`, event => {
            transitionHeader();
            return () => window.removeEventListener(`scroll`, event => {
                transitionHeader();
            })
        })
    }, [])

  return (
    <header className={show ? `scrolledHeader` : `topHeader`}>
        <div className="inner">
            <div className="navigation navigationLeft">
                <a title="Home" className="homeLink" href="./">
                    <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className="logo" alt={`logo`} width={`100px`} height={`auto`} />
                </a>
                <ul>
                    <li className="navigation-tab">
                        <a className="current active hoverLink" href="./">Home</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./about">About</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="current active hoverLink" href="./portfolio">Portfolio</a>
                    </li>
                    <li className="navigation-tab">
                        <a className="hoverLink" href="./contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header
