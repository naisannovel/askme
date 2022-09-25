import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuizContext() {
    return useContext(QuizContext);
}

const QuizProvider = ({ children }) =>{

    const [quizzes, setQuizzes] = useState([]);
    const [user, setUser] = useState(null);
    const [score, setScore] = useState(0);
    const [isFinish, setIsFinish] = useState(false);

    const value = {
        user,
        setUser,
        quizzes,
        setQuizzes,
        score,
        setScore,
        isFinish,
        setIsFinish
    }

    return (
        <QuizContext.Provider value={value}>
            { children }
        </QuizContext.Provider>
    )
}

export default QuizProvider;