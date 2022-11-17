import viteLogo from '../../assets/vite.svg';
import reactLogo from '../../assets/react.svg';

const Contact: React.FC<any> = () => { 

    return (
        <div className='contact'>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact