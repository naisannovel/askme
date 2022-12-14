import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Result from '../components/Result';
import { useQuizContext } from '../context/quizContext';

const ResultPage = () => {

    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    
    const { quizzes, setQuizzes, setScore, isFinish, setIsFinish } = useQuizContext();
    
    useEffect(()=>{
        if(quizzes?.length != 10){
            router.push('/');
        }else{
            setIsAuthLoading(false)
        }
    },[router])
    
    useEffect(()=>{
        setLoading(true)

        const fetchAns = async () =>{
            const answer = await axios.get(`${process.env.BASE_URL}/answer.json`);

            if(answer.status === 200 && answer.data !== null){
                const correctAns = answer.data;

                quizzes?.map((quiz, index) =>{
                    
                    // binary search
                    let start = 0;
                    let end = correctAns?.length - 1;

                    while(start <= end){
                        const middle = Math.round((start + end) / 2);

                        if(correctAns[middle]?.qid === quiz.id){
                            
                            if(correctAns[middle].correct === +quiz.checked){
                                setScore(prevState => prevState + 1);
                            }

                            const sampleAry = [...quizzes];
                            sampleAry[index].correct = correctAns[middle].correct;
                            setQuizzes(prevState => [...sampleAry]);

                            return;
                        }

                        if(correctAns[middle]?.qid > quiz.id){
                            end = middle - 1;
                        }else{
                            start = middle + 1;
                        }
                    }

                })
                setIsFinish(true);
                setLoading(false);
            }
        }
        
        if(isFinish){
            setLoading(false);
        }else{
            fetchAns()
        }
    },[])

    if(isAuthLoading) return <p>Loading...</p>;

    return (
        <div className='grid place-items-center min-h-screen w-full bg-slate-100'>
            <Helmet>
                <title>Askme - result</title>
            </Helmet>
            <Result loading={loading} />
        </div>
    );
};

export default ResultPage;