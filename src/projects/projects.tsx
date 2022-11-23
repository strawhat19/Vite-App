import { Suspense, useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import piratechsBanner from '../assets/PiratechsBanner.jpeg';
import Banner from '../components/banner/banner';
import Icons from '../components/icons/icons';
import { StateContext } from '../app';
import viteLogo from '/vite.svg';
import '../global.scss';

const Projects = () => {
  let [show, setShow] = useState(false);
  let [updateTimer, setUpdateTimer] = useState(0);
  let [pageChanged, setPageChanged] = useState(false);
  let [mode, setMode] = useState(import.meta.env.MODE);
  let updateProjects = (projects: any) => setProjects(projects);
  const { pagename, setPageName, capitalizeAllWords } = useContext(StateContext);
  let transitionHeader = () => window.scrollY > 0 ? setShow(true) : setShow(false);
  let [projects, setProjects] = useState<any>(JSON.parse(localStorage.getItem(`projects`) as any) || []);

  function formatDate(date: any) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
  }

  // Github
  const getGithubData = async () => {
    let username = `strawhat19`;
    const repoURL = `https://api.github.com/users/${username}/repos`;
    const githubURL = `https://api.github.com/users/${username}`;
    const repositories = JSON.parse(localStorage.getItem(`repositories`) as string) || [];
    const responseRepos = await fetch(repoURL);
    const response = await fetch(githubURL);

    if (!response.ok || !responseRepos.ok) {
      console.log(`Fetch Error`);
      console.clear();
    } else {
      // Get Github Info
      const github = await response.json();
      const githubRepos = await responseRepos.json();
      const { name, html_url, bio, blog, avatar_url, login, public_repos, repos_url, starred_url, followers, following } = github;
      githubRepos.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).map((repo: any) => {
        const { name, html_url, created_at, owner, topics, license, updated_at, deployments_url, language, homepage, description } = repo;
        const filteredRepo = { name, owner, url: html_url, topics, date: created_at, license, updated: updated_at, homepage, language, deployment: deployments_url, description };
        repositories.push(filteredRepo);
      });
      const user = { name, url: html_url, bio, projects: repositories.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()), website: blog, avatar: avatar_url, login, repoLink: repos_url, repoNum: public_repos, starred: starred_url, followers, following, lastUpdated: formatDate(new Date()) };

      updateProjects(user.projects);
      console.log(`Updated Projects`, user.projects);
      localStorage.setItem(`user`, JSON.stringify(user));
      localStorage.setItem(`projects`, JSON.stringify(user.projects));
    };
  }
  
  useEffect(() => {
    if (updateTimer == 0 || pageChanged) {
      setUpdateTimer(updateTimer++);
      
      if (projects.length == 0) {
        getGithubData();
      } else {
        console.log(`Projects`, projects);
      };
    }
    
    window.addEventListener(`scroll`, event => {
      transitionHeader();
      return () => window.removeEventListener(`scroll`, event => {
          transitionHeader();
      })
    });

  }, []);

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
      {mode == `production` && <Banner bannerBG={piratechsBanner} />}
      <main className={`App ${mode == 'production' ? 'content' : ''}`} id="App">
        {mode == `production` && <Icons />}
        <h1>Projects</h1>
        <div className="projects">
          {projects.length > 0 && projects.map((project: any, index: any) => {
            if (project.topics.length > 0) return (
              <div key={project.name} className="project">
                <div className="projectHeader">
                  <div className="headerTop">
                    <a href={project.url} target="_blank" className="projectName hoverLink"><i className="fab fa-github"></i> {project.name}</a>
                    <span className="index">#{index + 1}</span>
                  </div>
                  <div className="projectBy">
                      <a href={`https://github.com/${project.owner.login}`} className="hoverLink"><LazyLoadImage effect="blur" src={project.owner.avatar_url} className={`avatar`} alt={`avatar`} width={`25px`} height={`auto`} /> {project.owner.login}</a>
                      <span className="projectDate">{formatDate(new Date(project.date))}</span>
                  </div>
                </div>
                <div className="projectContent">
                  {project.description}
                </div>
                <div className="projectFooter">
                  <div className="topics">{project.topics.length > 0 && project.topics.map((topic: any) => {
                    if (topic == `css` || topic == `CSS`) {return <i key={topic} className="fab fa-css3-alt"></i>};
                    if (topic == `html` || topic == `HTML`) {return <i key={topic} className="fab fa-html5"></i>};
                    if (topic == `sass` || topic == `SCSS`) {return <i key={topic} className="fab fa-sass"></i>};
                    if (topic == `javascript`) {return <i key={topic} className="fab fa-js-square"></i>};
                    if (topic == `angular`) {return <i key={topic} className="fab fa-angular"></i>};
                    if (topic == `discord`) {return <i key={topic} className="fab fa-discord"></i>};
                    if (topic == `node`) {return <i key={topic} className="fab fa-node-js"></i>};
                    if (topic == `sql`) {return <i key={topic} className="fab fa-database"></i>};
                    if (topic == `react`) {return <i key={topic} className="fab fa-react"></i>};
                    if (topic == `php`) {return <i key={topic} className="fab fa-php"></i>};
                  })}</div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </Suspense>
  )
}

export default Projects