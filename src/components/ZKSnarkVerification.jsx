/* eslint-disable no-unused-vars */
// src/components/ZKSnarkVerification.js
import React, { useState } from "react";
import { generateProof, verifyOnChain } from "../zkSnarkFunctions"; // Import functions

const ZKSnarkVerification = () => {
    const [age, setAge] = useState(0);
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(0);
    const [verificationResult, setVerificationResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Generate proof
        const { proof, publicSignals } = await generateProof(age, minAge, maxAge);
        
        // Verify proof on-chain
        const isValid = await verifyOnChain(proof, publicSignals);
        console.log(isValid)
        setVerificationResult(isValid);
    };

    return (
        <div>
            <h1>zk-SNARK Age Verification</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Age:</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Minimum Age:</label>
                    <input type="number" value={minAge} onChange={(e) => setMinAge(e.target.value)} />
                </div>
                <div>
                    <label>Maximum Age:</label>
                    <input type="number" value={maxAge} onChange={(e) => setMaxAge(e.target.value)} />
                </div>
                <button type="submit">Verify Age</button>
            </form>
            {verificationResult !== null && (
                <p>Verification Result: {verificationResult ? "Valid!" : "Invalid!"}</p>
            )}
        </div>
    );
};

export default ZKSnarkVerification;
