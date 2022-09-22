import React from "react";

const QuizForm = ({ questions, quizNum, changeHandler }) => {
  return (
    <div className="w-10/12 m-auto pb-10 pt-16">
      <h3 className="text-[22px] py-6"> {questions[quizNum]?.title} </h3>
      <form className="w-11/12 m-auto grid grid-rows-4 gap-y-4">
        {questions[quizNum]?.options?.map((item) => (
          <label htmlFor={item?.id} key={item?.id} className="bg-[#EFEFEF] py-4 text-lg flex items-center gap-x-4 cursor-pointer rounded-xl pl-6">
            <input
              type="radio"
              id={item?.id}
              value={item?.id}
              name="checked"
              onChange={(e) => changeHandler(e)}
              checked={+questions[quizNum]?.checked === item?.id}
              className="h-6 w-6 shrink-0"
            />
            <span> {item?.item} </span>
          </label>
        ))}
      </form>
    </div>
  );
};

export default QuizForm;
