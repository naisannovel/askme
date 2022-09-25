import { useRouter } from 'next/router';
import React from 'react';
import { useQuizContext } from '../context/quizContext';
import ResultSkeleton from './skeleton/ResultSkeleton';

const Result = ({ loading }) => {

    const router = useRouter();
    const { score } = useQuizContext();
    
    const correctAnsHandler = ()=>{
        router.push('/quiz');
    }

    return (
        <div className='lg:w-1/2 w-11/12 h-1/2 bg-white rounded-xl min-h-min flex flex-col justify-center items-center gap-y-8'>
            {
                loading ? <ResultSkeleton/> :
                <>
                <span className='bg-primary-color text-white flex flex-col gap-y-2 justify-center items-center w-48 rounded-xl py-4'>
                    <span className='lg:text-base text-sm'>Your Score</span>
                    <span className='lg:text-4xl text-3xl font-extrabold'>{ score } / 10</span>
                </span>
                <button onClick={correctAnsHandler} className='secondary-btn text-black border border-green-600'>See Correct Answer</button>
                </>
            }
        </div>
    );
};

export default Result;