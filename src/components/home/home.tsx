import { useState } from 'react';
import viteLogo from '../../assets/vite.svg';
import reactLogo from '../../assets/react.svg';

const Home: React.FC<any> = () => { 
    const [count, setCount] = useState(0);
    return (
        <div className='home'>
            Custom Vite App w/ Menu
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
            </div>
        </div>
    )
}

export default Home