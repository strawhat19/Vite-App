import { Suspense, useContext, useEffect, useState } from 'react';
import piratechsBanner from '../assets/PiratechsBanner.jpeg';
import PageHeader from '../components/header/pageHeader';
import Banner from '../components/banner/banner';
import Icons from '../components/icons/icons';
import { StateContext } from '../app';
import '../global.scss';

const About = () => {
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  const { pagename, setPageName, capitalizeAllWords } = useContext(StateContext);
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
    }
  }, []);

  return (
    <StateContext.Provider value={{ pagename, setPageName, capitalizeAllWords }}>
      <Suspense>
        {mode != `development` && <PageHeader />}
        {mode == `production` && <Banner bannerBG={piratechsBanner} />}
        <main className={`App ${mode == 'production' ? 'content' : ''}`} id="App">
          {mode == `production` && <Icons />}
          <h1>{capitalizeAllWords(pagename)}</h1>
        </main>
      </Suspense>
    </StateContext.Provider>
  )
}

export default About