import React, { useState } from 'react';
import QuizSkeleton from './skeleton/QuizSkeleton';

const Quiz = () => {

    const [quizNum, setQuizNum] = useState(1);

    const nextHandler = ()=>{
        if(quizNum < 10){
            setQuizNum(prevState => prevState + 1);
        }
    }

    const prevHandler = () => {
        if(quizNum > 1){
            setQuizNum(prevState => prevState - 1);
        }
    }

    return (
        <div className='w-1/2 bg-white rounded-xl min-h-min py-6 my-20'>
            {/* quiz dynamic step */}
            <div className='w-11/12 m-auto'>
                <div className={`w-full h-[8px] rounded-[30px] bg-[#EBEDEF] relative quiz-dynamic-step after:w-[calc(10%*${quizNum})]`}></div>
                <div className='text-slate-400 text-sm flex items-center justify-between mt-2'>
                    <span>Quiz No {quizNum} </span>
                    <span>Question { quizNum } out of 10</span>
                </div>
            </div>

            {/* quiz */}
            {/* <div className='w-10/12 m-auto pb-10 pt-16'>
                <h3 className='text-[22px] py-6'>Which of the following css property specifies a delay for the transition effect?</h3>
                <form className='w-11/12 m-auto grid grid-rows-4 gap-y-4'>

                    <label htmlFor='1' className='bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6'>
                        <input type="radio" id='1' value={1} name='answer' className='h-6 w-6' />
                        <span>transition-delay</span>
                    </label>

                    <label htmlFor='2' className='bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6'>
                        <input type="radio" id='2' value={2} name='answer' className='h-6 w-6' />
                        <span>transition-delay</span>
                    </label>

                    <label htmlFor='3' className='bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6'>
                        <input type="radio" id='3' value={3} name='answer' className='h-6 w-6' />
                        <span>transition-delay</span>
                    </label>

                    <label htmlFor='4' className='bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6'>
                        <input type="radio" id='4' value={4} name='answer' className='h-6 w-6' />
                        <span>transition-delay</span>
                    </label>

                </form>
            </div> */}

            <QuizSkeleton/>

            {/* prev - next button */}
            <div className='flex w-full justify-center gap-x-2'>
                { quizNum > 1 && <button  onClick={prevHandler} className='secondary-btn text-black border-2 border-primary-color'>Prev</button> }
                { quizNum < 10 && <button onClick={nextHandler} className='secondary-btn bg-primary-color text-white'>Next</button> }
                { quizNum === 10 && <button className='secondary-btn bg-primary-color text-white'>Submit</button> }
            </div>
        </div>
    );
};

export default Quiz;