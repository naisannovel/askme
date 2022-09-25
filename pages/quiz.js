import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import { useQuizContext } from '../context/quizContext';

const quiz = () => {

    const router = useRouter();
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    const { user } = useQuizContext();

    useEffect(()=>{
        if(user === null){
            router.push('/');
        }else{
            setIsAuthLoading(false);
        }
    },[router])

    if(isAuthLoading) return <p>Loading...</p>;

    return (
        <div className='grid place-items-center min-h-screen w-full bg-slate-100'>
            <Quiz/>
        </div>
    );
};

export default quiz;