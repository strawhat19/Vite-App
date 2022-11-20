import { LazyLoadImage } from 'react-lazy-load-image-component';
import bannerImg from '../../assets/PiratechsBanner.jpeg';
import { Suspense } from 'react';

const Banner = () => {
    return (
        <Suspense>
            <div className='banner'>
                <LazyLoadImage effect="blur" src={bannerImg} id={`bannerImg`} className={`bannerImg`} alt={`Banner`} width={`1600px`} height={`auto`} />
            </div>
        </Suspense>
    )
}

export default Banner