import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  const provider = new BrowserProvider(window.ethereum);
  
  async function connectToMetamask() {
    const signer = await provider.getSigner();
    setIsConnected(true);
    console.log("s",signer.address);
  }

  return (
    <div className='w-screen h-20 bg-[orange] font-bold text-[#08244d] text-xl'>
      <ul className='flex gap-5 justify-between mx-[4%] pt-5 '>
        <div className=''>
          <Link to="/">
            <li>ZKP</li>
          </Link>
        </div>
        <div className='flex gap-4 items-center'>
          <Link to="/verifier/">
            <li>Home</li>
          </Link>
          <Link to="/verifier/newrequest">
            <li>New Request</li>
          </Link>
          <Link to="/verifier/request">
            <li>Requests</li>
          </Link>
          <li className='w-[200px] h-10 bg-[#08244d] text-white text-center pt-1 rounded-full' onClick={connectToMetamask}>Connect Metamask</li>
        </div>
      </ul>
    </div>
  )
}

export default nav;
