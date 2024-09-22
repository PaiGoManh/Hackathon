// /* eslint-disable no-unused-vars */
// // src/components/ZKSnarkVerification.js
// import React, { useState } from "react";
// import { generateProof, verifyOnChain } from "../zkSnarkFunctions"; // Import functions

// const ZKSnarkVerification = () => {
//     const [age, setAge] = useState(0);
//     const [minAge, setMinAge] = useState(0);
//     const [maxAge, setMaxAge] = useState(0);
//     const [verificationResult, setVerificationResult] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Generate proof
//         const { proof, publicSignals } = await generateProof(age, minAge, maxAge);
        
//         // Verify proof on-chain
//         const isValid = await verifyOnChain(proof, publicSignals);
//         console.log(isValid)
//         setVerificationResult(isValid);
//     };

//     return (
//         <div>
//             <h1>zk-SNARK Age Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Age:</label>
//                     <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Minimum Age:</label>
//                     <input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Maximum Age:</label>
//                     <input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
//                 </div>
//                 <button type="submit">Verify Age</button>
//             </form>
//             {verificationResult !== null && (
//                 <p>Verification Result: {verificationResult ? "Valid!" : "Invalid!"}</p>
//             )}
//         </div>
//     );
// };

// export default ZKSnarkVerification;
// // src/components/ZKSnarkVerification.js
// import React, { useState } from "react";
// import { generateProof, verifyOnChain } from "../zkSnarkFunctions"; // Import functions

// const ZKSnarkVerification = () => {
//     const [age, setAge] = useState(0);
//     const [minAge, setMinAge] = useState(0);
//     const [maxAge, setMaxAge] = useState(0);
//     const [verificationResult, setVerificationResult] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         // Generate proof
//         const { proof, publicSignals } = await generateProof(age, minAge, maxAge);
        
//         // Verify proof on-chain
//         const isValid = await verifyOnChain(proof, publicSignals);
//         setVerificationResult(isValid);
//     };

//     return (
//         <div>
//             <h1>zk-SNARK Age Verification</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Age:</label>
//                     <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Minimum Age:</label>
//                     <input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
//                 </div>
//                 <div>
//                     <label>Maximum Age:</label>
//                     <input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
//                 </div>
//                 <button type="submit">Verify Age</button>
//             </form>
//             {verificationResult !== null && (
//                 <p>Verification Result: {verificationResult ? "Valid!" : "Invalid!"}</p>
//             )}
//         </div>
//     );
// };

// export default ZKSnarkVerification;

import { useState } from 'react';
import {groth16} from 'snarkjs';
// import { BrowserProvider } from 'ethers';
import verificationKey from './verification_key.json';


const ZKSnarkVerification = () => {
    const [proof, setProof] = useState(null);
    const [publicSignals, setPublicSignals] = useState(null);
    const [verificationResult, setVerificationResult] = useState('');
    const [fileContent, setFileContent] = useState('');

    const handleProofGeneration = async () => {
        try {
            const age=60;
            const min_age=20;
            const max_age=40;
            const input = { age, min_age, max_age };

            // Generate proof
            const { proof,publicSignals } = await groth16.fullProve(
                input, 
                './age_range.wasm', // Correctly loaded ArrayBuffer
                './age_range_final.zkey'// Path to zkey file
            );


            setProof(proof);
            setPublicSignals(publicSignals);
            console.log(proof)
            console.log(publicSignals)
            console.log(verificationKey);
// const result = 
        } catch (error) {
            console.error("Error during proof generation or verification:", error);
            setVerificationResult("Error during verification");
        }
    };

    const fetchFileContent = async () => {
        try {
            const response = await fetch('http://localhost:3000/read-file'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }else{
                console.log(response)

            }
            const data = await response.json();
            setFileContent(data.content);
            console.log(fileContent)
        } catch (error) {
            console.error('Error fetching file content:', error);
        }
    };


    return (
        <div>
            <h1>zk-SNARK Proof Verification</h1>
            <button onClick={handleProofGeneration}>Generate Proof and Verify</button>
            <button onClick={fetchFileContent}>Fetch File Content</button>
            {proof && (
                <div>
                    <h2>Proof</h2>
                    <pre>{JSON.stringify(proof, null, 1)}</pre>
                </div>
            )}
            {publicSignals && (
                <div>
                    <h2>Public Signals</h2>
                    <pre>{JSON.stringify(publicSignals, null, 1)}</pre>
                </div>
            )}
            {verificationResult && (
                <div>
                    <h2>Verification Result</h2>
                    <p>{verificationResult}</p>
                </div>
            )}
            {fileContent && (
                <div>
                    <h2>File Content</h2>
                    <pre>{fileContent}</pre>
                </div>
            )}
        </div>
    );
};

export default ZKSnarkVerification;
