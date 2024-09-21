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
          <Route path="/" element={<ProverHome />} />
          <Route path="/request" element={<Requests />} />
        </Routes>
      </div>
    </div>

  );
}

export default Prover;
