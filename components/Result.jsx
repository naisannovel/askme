import React from 'react';
import ResultSkeleton from './skeleton/ResultSkeleton';

const Result = () => {
    return (
        <div className='w-1/2 h-1/2 bg-white rounded-xl min-h-min flex flex-col justify-center items-center gap-y-8'>
            <span className='bg-primary-color text-white flex flex-col gap-y-2 justify-center items-center w-48 rounded-xl py-4'>
                <span className='text-base'>Your Score</span>
                <span className='text-4xl font-extrabold'>1 / 10</span>
            </span>
            <button className='secondary-btn text-black border border-green-600'>See Correct Answer</button>
            {/* <ResultSkeleton/> */}
        </div>
    );
};

export default Result;