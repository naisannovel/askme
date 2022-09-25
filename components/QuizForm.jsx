import React from "react";
import { useQuizContext } from "../context/quizContext";

const QuizForm = ({ quizzes, quizNum, changeHandler }) => {

  const { isFinish } = useQuizContext();
  
  return (
    <div className="w-11/12 m-auto pb-10 pt-16">
      <h3 className="lg:text-[22px] text-[18px] py-6"> {quizzes[quizNum]?.title} </h3>
      <form className="w-11/12 m-auto grid grid-rows-4 gap-y-4">
        {quizzes[quizNum]?.options?.map((item) => (
          <label htmlFor={item?.id} key={item?.id} className={`bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6 ${isFinish && item?.id === +quizzes[quizNum]?.checked && item?.id != quizzes[quizNum]?.correct ? 'bg-red-600 text-white':''} ${isFinish && item?.id === quizzes[quizNum]?.correct ? 'bg-[#2eb85c] text-white':''}`}>
            <input
              type="radio"
              id={item?.id}
              value={item?.id}
              name="checked"
              onChange={(e) => changeHandler(e)}
              checked={+quizzes[quizNum]?.checked === item?.id}
              className="h-6 w-6 shrink-0"
              disabled={isFinish}
            />
            <span className="lg:text-base text-sm"> {item?.item} </span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuizForm;
