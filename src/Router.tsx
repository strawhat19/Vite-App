// import { Route, Routes, useRoutes } from 'react-router';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Header from './components/header/header';
import About from './components/about/about';
import { useEffect, useState } from 'react';
import Home from './components/home/home';
import './global.scss';
import './App.css';

const Router = () => {
  const [aboutPaths, setAboutPaths] = useState([`about`]);
  const [homePaths, setHomePaths] = useState([``, `home`]);
  const [pagename, setPagename] = useState(window.location.pathname.replace(`/vite-app/`, ``));
  const [projectPaths, setProjectPaths] = useState([`projects`, `portfolio`, `resume`, `experience`]);
  const [contactPaths, setContactPaths] = useState([`contact`, `contact-us`, `contactus`, `contactme`, `contact-me`]);

  useEffect(() => {
    console.log(`Vite React`, pagename);
  }, [])

  return (
    <>
    <Header />
    <div className="App">
      {homePaths.includes(pagename) && <Home />}
      {aboutPaths.includes(pagename) && <About />}
      {projectPaths.includes(pagename) && <Projects />}
      {contactPaths.includes(pagename) && <Contact />}
    </div>
    </>
  )
}

export default Router
