import React from 'react'

const ProverHome = () => {

    return (
        <div className='pt-[4%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-2'>
          <div className='lg:w-[400px] lg:h-[450px] border-[3px] border-[white] rounded-md
                          md:w-[400px] md:h-400px]
                          sm:w-[400px] sm:[400px] 
                          w-[340px] h-[350px]'>
            <form className='flex flex-col gap-4 text-black ml-[20%] mt-[10%]'>
                <div className='w-[250px] h-10 bg-[#db9410] text-center pt-1 text-xl font-bold text-white border-white border-[3px] rounded-full'>
                    Connect  DigiLocker
                </div>
                <div className='mt-[5%]'>
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
                    generate proof
                </button>

            </form>
            <div className='w-[100px] h-10 bg-[orange] rounded-full text-center pt-2 mt-8 ml-[38%] md:mb-5'>
                Send
            </div>
          </div>
        </div>
      );
}

export default ProverHome