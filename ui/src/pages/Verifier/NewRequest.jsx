// eslint-disable-next-line no-unused-vars
import React, { useState ,useEffect} from 'react';
import { BrowserProvider,Contract } from 'ethers';
const contractABI = [
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



const NewRequest = () => {
const [contract, setContract] = useState(null);
const [proverAddress, setProverAddress] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [account, setAccount] = useState(null);
    const [zkpStatus, setZkpStatus] = useState(false);

  const [minAge,setMinage]=useState('');
  const [maxAge,setMaxage]=useState('');
  useEffect(() => {
    const initBlockchain = async () => {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
  
        // Request account access
        const signer = await provider.getSigner();
        console.log('address',signer.address)

  
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
//   const handleRequestVerification = async () => {
//     try {
//       console.log(proverAddress)
//       const tx = await contract.requestVerification(proverAddress);
//       const receipt = await tx.wait();
//       console.log(receipt)
//       const verificationRequestedEventSignature = ethers.utils.id('VerificationRequested(uint256,address)');

//       const verificationRequestedEvent = receipt.logs.find(log => {
//         return log.topics[0] === verificationRequestedEventSignature;
//     });

//     if (verificationRequestedEvent) {
//         // The data field is in hex format; we need to convert it to a number
//         const requestId = ethers.BigNumber.from(verificationRequestedEvent.data).toNumber();
//         setRequestId(requestId);
//         console.log('Verification request sent:', requestId);
//     } else {
//         console.error('VerificationRequested event not found in the receipt');
//     }
// } catch (error) {
//     console.error('Error requesting verification:', error);
//       console.log('Verification request sent:', requestId);
//     } 
  //   };
  const handleStoreData = async () => {
    try {
      const tx = await contract.storeData(proverAddress, zkpStatus);
      await tx.wait();
      console.log('Data stored successfully');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };
  const handleSelectChange = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
    console.log(selectedOption)
  };
const handleSubmit = (e)=>{
  e.preventDefault();
  setZkpStatus('successfully requested')
  handleStoreData()
localStorage.setItem('minAge',minAge);
localStorage.setItem('maxAge',maxAge);
localStorage.setItem('category',selectedOption);

}
  return (
    <div className='lg:pt-[4%] pt-[10%] lg:ml-[35%] md:ml-[30%] sm:ml-[20%] ml-3'>
      <div className='lg:w-[400px] lg:h-[495px] border-[3px]
                       md:w-[400px] md:h-[450px]
                       w-[350px] h-[475px] border-[white]'>
 <p>Connected Account: {account}</p>

        <div className='text-center mt-5 text-2xl font-bold'>Request Form</div>
        <form className='flex flex-col gap-4 text-black lg:ml-[20%] ml-[15%] mt-[10%]' onSubmit={handleSubmit}>
          <div>
            
          <label className="block text-sm font-medium text-[white]">Prover Address</label>
              <input
              id="textInput1"
              type="text"
              placeholder="Prover Address"
              value={proverAddress}
              onChange={(e) => setProverAddress(e.target.value)}

              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
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
              onChange={(e)=>setMinage(e.target.value)}

              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
              <label className="mt-2 block text-sm font-medium text-[white]">Maximum Age</label>
              <input
              id="textInput"
              type="text"
              placeholder="Enter your text here"
              onChange={(e)=>setMaxage(e.target.value)}
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            </div>
          )}

          {/* <div>
            <label className="block text-sm font-medium text-white">
              Enter value
            </label>
            <input
              id="textInput"
              type="text"
              placeholder="Enter your text here"
              className="mt-1 block w-[250px] p-2 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div> */}

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
