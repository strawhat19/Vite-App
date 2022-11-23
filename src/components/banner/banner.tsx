import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Suspense } from 'react';

const Banner = (props: any) => {
    return (
        <Suspense>
            <div className='banner'>
                <LazyLoadImage effect="blur" src={props.bannerBG} id={`bannerImg`} className={`bannerImg`} alt={`Banner`} width={`100%`} height={`auto`} />
            </div>
        </Suspense>
    )
}

export default Banner