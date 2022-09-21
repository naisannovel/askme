import React from 'react';

const ProgressBar = ({ quizNum }) => {
    return (
        <div className='w-11/12 m-auto'>
            <div className="w-full h-[8px] rounded-[30px] bg-[#EBEDEF] overflow-hidden">
                <div className="h-full bg-[#3EC65D]" style={{width: `calc(10%*${quizNum + 1})`, transition: '1s'}}></div>
            </div>
            <div className='text-slate-400 text-sm flex items-center justify-between mt-2'>
                <span>Quiz No {quizNum + 1} </span>
                <span>Question { quizNum + 1 } out of 10</span>
            </div>
        </div>
    );
};

export default ProgressBar;