import { useState,useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserProvider,Contract } from 'ethers';
const contractABI = 
[
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "verifier",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "prover",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"name": "DataStored",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_prover",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "storeData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTotalVerifications",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getVerification",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "verifications",
		"outputs": [
			{
				"internalType": "address",
				"name": "verifier",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "prover",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = '0x235bAb1c04159Fb5d11b417E34Ef8d6Ab6e833d7';
const ProverHome = () => {
    const [inputValue, setInputValue] = useState('');
    const [proverAddress, setproverAddress] = useState(null);

    const [contract, setContract] = useState(null);
    const [account, setAccount] = useState(null);
    const [zkpStatus, setZkpStatus] = useState(false);
  
    useEffect(() => {
        const initBlockchain = async () => {
            if (window.ethereum) {
              const provider = new BrowserProvider(window.ethereum);
        
              // Request account access
              const signer = await provider.getSigner();
              console.log('address',signer.address)
              setproverAddress(signer.address)
          const contract = new Contract(contractAddress, contractABI, signer);
          setContract(contract);
  
          const userAddress = await signer.getAddress();
          setAccount(userAddress);
        } else {
          console.log('Ethereum wallet not found');
        }
      };
  
      initBlockchain();
    }, []);
    const handleCompleteVerification = async () => {
        try {
            const tx = await contract.storeData(proverAddress, zkpStatus);
            await tx.wait();
            console.log('Data stored successfully');
          } catch (error) {
            console.error('Error storing data:', error);
          }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        handleCompleteVerification()
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
            setZkpStatus('success')
            toast.success(result.message); 
        } else {
            setZkpStatus('failed')
            toast.error(result.message); 
        }
    };

    return (
        <div className='pt-[10%] lg:pt-[5%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-5'>
            <ToastContainer /> 
            <div className='lg:w-[400px] lg:h-[400px] border-[3px] border-[white] rounded-md w-[340px] h-[470px]'>
            <p>Connected Account: {account}</p>

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
