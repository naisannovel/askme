import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuiz() {
    return useContext(QuizContext);
}

const QuizProvider = ({ children }) =>{

    const [quizzes, setQuizzes] = useState([]);
    const [user, setUser] = useState(null);
    const [score, setScore] = useState(0);

    const value = {
        user,
        quizzes,
        score,
        setUser,
        setQuizzes,
        setScore
    }

    return (
        <QuizContext.Provider value={value}>
            { children }
        </QuizContext.Provider>
    )
}

export default QuizProvider;