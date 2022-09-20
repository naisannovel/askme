import React from 'react';
import Shimmer from './Shimmer';

const QuizSkeleton = () => {
    return (
        <div className='bg-[#f2f2f2] py-10 my-10 w-11/12 m-auto rounded-lg relative overflow-hidden'>
            <>
                <span className='w-11/12 m-auto bg-[#ddd] py-3 block rounded-xl'></span>
                <span className='w-11/12 m-auto bg-[#ddd] py-2 mt-2 block rounded-xl'></span>
                <div className='mt-10 grid grid-rows-4 gap-y-4 w-11/12 m-auto'>
                    <span className='w-11/12 m-auto bg-[#ddd] py-4 block rounded-xl'></span>
                    <span className='w-11/12 m-auto bg-[#ddd] py-4 block rounded-xl'></span>
                    <span className='w-11/12 m-auto bg-[#ddd] py-4 block rounded-xl'></span>
                    <span className='w-11/12 m-auto bg-[#ddd] py-4 block rounded-xl'></span>
                </div>
            </>
            <Shimmer/>
        </div>
    );
};

export default QuizSkeleton;