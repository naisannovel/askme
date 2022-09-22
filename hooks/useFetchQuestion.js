import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchQuestion = ( qnum ) => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        
        const fetchQuestion = async (randomNum) =>{
            setLoading(true);
            const fetchQ = await axios.get(`https://askme-nn-default-rtdb.asia-southeast1.firebasedatabase.app/question/${randomNum}.json`);

            if(fetchQ.status === 200 && fetchQ.data !== null){
                setQuestions(prevState => [...prevState, fetchQ.data]);
            }
            
            setLoading(false)
        }

        if(questions[qnum] === undefined){
            // generate random number
            const randomNumber = Math.round(Math.random()*29);
            fetchQuestion(randomNumber);
        }

    },[qnum])

    return { loading, questions, setQuestions };
};

export default useFetchQuestion;