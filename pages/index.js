import React from 'react';
import Home from '../components/Home';
import {Helmet} from "react-helmet";

const HomePage = () => {
  return (
    <>
    <Helmet>
      <title>Askme - home</title>
    </Helmet>
    <Home/>
    </>
  );
};

export default HomePage;