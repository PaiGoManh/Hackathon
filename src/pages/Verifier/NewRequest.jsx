import React, { useState } from 'react';

const NewRequest = () => {
  const [selectedOption, setSelectedOption] = useState('');
  
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className='pt-[4%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-3'>
      <div className='lg:w-[400px] lg:h-[450px] border-[3px]
                       md:w-[400px] md:h-[450px]
                       w-[350px] h-[450px] border-[white]'>
        <div className='text-center mt-5 text-2xl font-bold'>Request Form</div>
        <form className='flex flex-col gap-4 text-black ml-[20%] mt-[10%]'>
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
              <option value="">Choose which to verify</option>
              <option value="name">Name</option>
              <option value="age">Age</option>
              <option value="address">Address</option>
            </select>
          </div>

          {selectedOption === 'age' && (
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium text-[white]">
                Select Age Range
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="range1"
                  value="18-25"
                  className="h-4 w-4"
                />
                <label className="text-white">18-30</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="range2"
                  value="26-35"
                  className="h-4 w-4"
                />
                <label htmlFor="range2" className="text-white">30-60</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="range3"
                  value="36-45"
                  className="h-4 w-4"
                />
                <label htmlFor="range3" className="text-white">60-90</label>
              </div>
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
