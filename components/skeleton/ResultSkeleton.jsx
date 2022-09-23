import React from 'react';
import Shimmer from './Shimmer';

const ResultSkeleton = () => {
    return (
        <div className='relative w-full h-full grid place-items-center overflow-hidden'>
            <span className='w-1/2 h-1/2 m-auto bg-[#ddd] py-3 block rounded-xl'></span>
            <Shimmer/>
        </div>
    );
};

export default ResultSkeleton;