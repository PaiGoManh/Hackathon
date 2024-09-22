import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProverHome = () => {
    const [inputValue, setInputValue] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const maxAge = localStorage.getItem('maxAge');
        const minAge = localStorage.getItem('minAge');
        const data = { inputValue, maxAge, minAge };

        const response = await fetch('http://localhost:3000/post-file', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            toast.success(result.message); 
        } else {
            toast.error(result.message); 
        }
    };

    return (
        <div className='pt-[10%] lg:pt-[5%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-5'>
            <ToastContainer /> 
            <div className='lg:w-[400px] lg:h-[400px] border-[3px] border-[white] rounded-md w-[340px] h-[470px]'>
                <form className='flex flex-col gap-4 text-black lg:ml-[20%] ml-[15%] mt-[10%]' onSubmit={handleSubmit}>
                    <button
                        type="button" 
                        className='w-[250px] h-10 bg-[#db9410] text-center text-xl font-bold text-white border-white border-[3px] rounded-full'
                    >
                        Connect DigiLocker
                    </button>
                    <div className='mt-[5%]'>
                        <label className="block text-sm font-medium text-white">Enter type</label>
                        <input
                            id="textInput"
                            type="text"
                            placeholder="Enter your text here"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <button type="submit" className='w-[250px] bg-[orange] h-10 text-center rounded-lg text-white font-semibold'>
                        Generate proof & Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProverHome;
