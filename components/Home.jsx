import React from 'react';
import HomeGlassmorphism from './glassmorphism/HomeGlassmorphism';
import { useForm } from "react-hook-form";
import Input from './form/Input';
import { useRouter } from 'next/router';
import { useQuiz } from '../context/quizContext';

const Home = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const router = useRouter();

    const { setUser } = useQuiz();
    
    const onSubmit = data => {
        setUser(data);
        router.push('/quiz');
        reset();
    };

    return (
        <div className='h-screen grid place-items-center relative'>
            <form onSubmit={handleSubmit(onSubmit)} className='lg:w-1/3 w-3/4 flex flex-col gap-y-6 justify-center items-center'>
                <Input name="name" type="text" placeholder="Enter your name" errors={errors} register={register} />
                <Input name="roll" type="number" placeholder="Enter your roll" errors={errors} register={register} />
                <input type="submit" value="Start Exam" className='primary-btn' />
            </form>
            <HomeGlassmorphism/>
        </div>
    );
};

export default Home;