import piratechsBanner from '../assets/PiratechsBanner.jpeg';
import PageHeader from '../components/header/pageHeader';
import { Suspense, useEffect, useState } from 'react';
import Banner from '../components/banner/banner';
import Icons from '../components/icons/icons';
import '../global.scss';

const Piratechs = () => {
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
    }
  }, []);

  return (
    <Suspense>
      {mode != `development` && <PageHeader />}
      {mode == `production` && <Banner bannerBG={piratechsBanner} />}
      <main className={`App ${mode == 'production' ? 'content' : ''}`} id="App">
        {mode == `production` && <Icons />}
        <h1>Piratechs</h1>
      </main>
    </Suspense>
  )
}

export default Piratechs