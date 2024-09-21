import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const VerifierHome = () => {
  const [qrValue, setQrValue] = useState('');  
  const [showQr, setShowQr] = useState(false); 

  const handleGenerateQr = () => {
    if (qrValue) {
      setShowQr(true);  
    } else {
      alert('Please enter a value to generate a QR code');
    }
  };

  return (
    <div className="">
      <div className="flex flex-col pt-[1%] pl-[40%]">
        <div className="pt-2 pb-5">
          <div className='w-[300px] h-[200px] flex items-center justify-center  border-gray-300'>
            {showQr ? (
              <QRCode value={qrValue} className="w-[300px] h-[200px]" />
            ) : (
              <span className="text-gray-400"></span>
            )}
          </div>
        </div>

        <input
          type="text"
          placeholder="Enter id"
          value={qrValue}
          onChange={(e) => setQrValue(e.target.value)} 
          className="w-[300px] h-10 pl-2 border-[orange] border-2 text-black"
        />

        <div className='flex text-[black] gap-3 mt-4'>
          <div onClick={handleGenerateQr} className="cursor-pointer w-[185px] h-10 bg-[white] pt-2 text-center">
            Generate QR Code
          </div>
          <div className='w-[103px] h-10 bg-white text-center pt-2'>
            Send ID
          </div>
        </div>

        <div className='w-[300px] h-10 bg-[orange] text-xl text-center pt-1 mt-4'>
          Check
        </div>
      </div>
    </div>
  );
};

export default VerifierHome;
