import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as ReactDOM from 'react-dom/client';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense, useEffect, useState } from 'react';
import viteLogo from '/vite.svg';
import '../global.scss';

const Piratechs = () => {
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  
  useEffect(() => {
    console.log(`PIRATECHS`);
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
    }
  }, [updateTimer, setUpdateTimer]);

  return (
    <Suspense>
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