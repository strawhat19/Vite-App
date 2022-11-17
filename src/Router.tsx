// import { Route, Routes, useRoutes } from 'react-router';
import Header from './components/header/header';
import { useEffect, useState } from 'react';
import Home from './components/home/home';
import './global.scss';
import './App.css';

const Router = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Vite React`);
  }, [])

  return (
    <div className="App">
     <>
      <Home />
     </>
    </div>
  )
}

export default Router
