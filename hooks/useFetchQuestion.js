import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuizContext } from '../context/quizContext';

const useFetchQuestion = ( qnum ) => {

    const [loading, setLoading] = useState(false);
    // const [questions, setQuestions] = useState([]);
    const { setQuizzes, quizzes } = useQuizContext();
    
    useEffect(()=>{
        
        const fetchQuestion = async (randomNum) =>{
            setLoading(true);
            const fetchQ = await axios.get(`https://askme-nn-default-rtdb.asia-southeast1.firebasedatabase.app/question/${randomNum}.json`);

            if(fetchQ.status === 200 && fetchQ.data !== null){
                setQuizzes(prevState => [...prevState, fetchQ.data]);
            }
            
            setLoading(false)
        }
        
        if(quizzes[qnum] === undefined){
            // generate random number
            const randomNumber = Math.round(Math.random()*29);
            fetchQuestion(randomNumber);
        }

    },[qnum])

    return { loading };
};

export default useFetchQuestion;