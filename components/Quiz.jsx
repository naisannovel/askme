import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuizSkeleton from './skeleton/QuizSkeleton';
import useFetchQuestion from '../hooks/useFetchQuestion';
import QuizForm from './QuizForm';
import { useQuiz } from '../context/quizContext';
import { useRouter } from 'next/router';


const Quiz = () => {

    const [quizNum, setQuizNum] = useState(0);
    const router = useRouter();

    const { loading, questions, setQuestions } = useFetchQuestion(quizNum);
    const { setQuizzes } = useQuiz();


    const nextHandler = ()=>{
        if(quizNum < 10){
            setQuizNum(prevState => prevState + 1);
        }
    }

    const prevHandler = () => {
        if(quizNum > 0){
            setQuizNum(prevState => prevState - 1);
        }
    }

    const changeHandler = (e) => {
        setQuestions(prevState => {
            prevState[quizNum].checked = e.target.value;
            return [...prevState];
        })
    }

    const submitHandler = () =>{
        setQuizzes([...questions]);
        router.push('/result');
    }

    const isDisabled = !questions[quizNum]?.checked && !+questions[quizNum]?.checked;

    return (
        <div className='w-1/2 bg-white rounded-xl min-h-min py-6 my-20'>
            <ProgressBar quizNum={quizNum} />

            { loading ? <QuizSkeleton/> : <QuizForm quizNum={quizNum} questions={questions} changeHandler={changeHandler} /> }

            <div className='flex w-full justify-center gap-x-2'>
                { quizNum+1 > 1 && <button  onClick={prevHandler} className='secondary-btn text-black border-2 border-primary-color'>Prev</button> }
                { quizNum+1 < 10 && <button onClick={nextHandler} className='secondary-btn bg-primary-color text-white' disabled={isDisabled}>Next</button> }
                { quizNum+1 === 10 && <button onClick={submitHandler} className='secondary-btn bg-primary-color text-white' disabled={isDisabled}>Submit</button> }
            </div>
        </div>
    );
};

export default Quiz;