/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProverHome from './ProverHome';
import Navbar from './Navbar'
import Requests from './Requests';

const Prover = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-screen bg-[#08244d] h-[573px] text-white'>
        <Routes>
          <Route path="/" element={< Requests/>} />
          <Route path="/request" element={< ProverHome/>} />
        </Routes>
      </div>
    </div>

  );
}

export default Prover;
