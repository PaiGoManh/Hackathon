import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../assets/zkp.jpg'

const Homepage = () => {
  return (
    <div className='w-screen h-screen bg-cover bg-center bg-[#08244d] pt-[15%] pl-[5%]'>
      {/* <img src={img} alt='' /> */}
        <div className='text-7xl font-extrabold'>
          <span className='text-white'>Zero-KP</span> <span className='text-[orange]'>VERIFY</span>
        </div>
        <div className='mt-10 flex gap-[3%] text-center'>
          <Link to="/prover">
            <div className="cursor-pointer w-[150px] h-[45px] pt-2 bg-[orange] text-black text-xl">
              Prover
            </div>
          </Link>
          <Link to="/verifier">
            <div className="cursor-pointer w-[150px] h-[45px] pt-[5px] border-2  text-white text-xl ">
              Verifier
            </div>
          </Link>
        </div>
    </div>
  );
}

export default Homepage;