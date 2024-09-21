/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VerifierHome from './VerifierHome';
import NewRequest from './NewRequest';
import Requests from './Requests';
import Navbar from './Navbar'

const Verifier = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-screen bg-[#08244d] h-[573px] text-white'>
        <Routes>
          <Route path="/" element={<VerifierHome />} />
          <Route path="/newrequest" element={<NewRequest />} />
          <Route path="/request" element={<Requests />} />
        </Routes>
      </div>
    </div>

  );
}

export default Verifier;
