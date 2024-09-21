import React, { useState } from 'react';

const NewRequest = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='lg:pt-[4%] pt-[10%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-3'>
      <div className='lg:w-[400px] lg:h-[470px] border-[3px]
                       md:w-[400px] md:h-[450px]
                       w-[350px] h-[470px] border-[white]'>
        <div className='text-center mt-5 text-2xl font-bold'>Request Form</div>
        <form className='flex flex-col gap-4 text-black lg:ml-[20%] ml-[15%] mt-[10%]'>
          <div>
            <label className="block text-sm font-medium text-[white]">
              Select an Option
            </label>
            <select
              id="selectOption"
              value={selectedOption}
              onChange={handleSelectChange}
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="choose" className='w-[200px]'>Choose which to verify</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="address">Address</option>
            </select>
          </div>

          {selectedOption === 'age' && (
            <div>
              <label className="block text-sm font-medium text-[white]">Minimum Age</label>
              <input
              id="textInput"
              type="text"
              placeholder="Enter your text here"
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
              <label className="mt-2 block text-sm font-medium text-[white]">Maximum Age</label>
              <input
              id="textInput"
              type="text"
              placeholder="Enter your text here"
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-white">
              Enter value
            </label>
            <input
              id="textInput"
              type="text"
              placeholder="Enter your text here"
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className=' w-[250px] bg-[orange] h-10 text-center  rounded-lg text-white font-semibold '
          >
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewRequest;
