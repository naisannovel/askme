import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import QuizSkeleton from './skeleton/QuizSkeleton';
import useFetchQuestion from '../hooks/useFetchQuestion';
import QuizForm from './QuizForm';


const Quiz = () => {

    const [quizNum, setQuizNum] = useState(0);
    const [selectedValue, setSelectedValue] = useState(null);


    const { loading, questions, setQuestions } = useFetchQuestion(quizNum);
    console.log("🚀 ~ file: Quiz.jsx ~ line 14 ~ Quiz ~ questions", questions)

    const nextHandler = ()=>{
        if(quizNum < 10){
            setQuizNum(prevState => prevState + 1);
            setSelectedValue(null);
        }
    }

    const prevHandler = () => {
        if(quizNum > 0){
            setQuizNum(prevState => prevState - 1);
            setSelectedValue(null);
        }
    }

    const changeHandler = (e) => {
        setSelectedValue(e.target.value);
        setQuestions(prevState => {
            prevState[quizNum].checked = e.target.value;
            return [...prevState];
        })
    }

    const isDisabled = !selectedValue && !+questions[quizNum]?.checked;

    return (
        <div className='w-1/2 bg-white rounded-xl min-h-min py-6 my-20'>
            <ProgressBar quizNum={quizNum} />

            { loading ? <QuizSkeleton/> : <QuizForm quizNum={quizNum} questions={questions} changeHandler={changeHandler} /> }

            <div className='flex w-full justify-center gap-x-2'>
                { quizNum+1 > 1 && <button  onClick={prevHandler} className='secondary-btn text-black border-2 border-primary-color'>Prev</button> }
                { quizNum+1 < 10 && <button onClick={nextHandler} className='secondary-btn bg-primary-color text-white' disabled={isDisabled}>Next</button> }
                { quizNum+1 === 10 && <button className='secondary-btn bg-primary-color text-white' disabled={isDisabled}>Submit</button> }
            </div>
        </div>
    );
};

export default Quiz;