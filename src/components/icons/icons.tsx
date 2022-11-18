import { LazyLoadImage } from 'react-lazy-load-image-component';
import reactLogo from '../../assets/react.svg';
import viteLogo from '../../vite.svg';
import { Suspense } from 'react';

const Icons = () => {
  return (
    <Suspense>
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <LazyLoadImage effect="blur" src={viteLogo} id={`logo`} className={`logo`} alt={`Vite logo`} width={`auto`} height={`9em`} />
            </a>
            <a href="https://reactjs.org" target="_blank">
                <LazyLoadImage effect="blur" src={reactLogo} id={`logo`} className={`logo react`} alt={`React logo`} width={`auto`} height={`9em`} />
            </a>
        </div>
    </Suspense>
  )
}

export default Icons