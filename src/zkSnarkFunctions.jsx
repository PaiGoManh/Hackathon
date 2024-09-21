// src/zkSnarkFunctions.js
import * as snarkjs from "snarkjs";
import { ethers,BrowserProvider } from "ethers";
import VerifierABI from "./Verifier.json"; // Ensure Verifier.json contains your contract's ABI
const provider = new BrowserProvider(window.ethereum);
// async function connectToMetamask() {
//   try {
//       const signer = await provider.getSigner();
//     //   const address = await signer.getAddress(); 
//       console.log("Address", signer);
//   } catch (error) {
//       console.error("Failed to connect to Metamask:", error);
//   }
// }
// Function to generate zk-SNARK proof
export async function generateProof(age, minAge, maxAge) {
    const input = {
        age: age,
        min_age: minAge,
        max_age: maxAge
    };

    // Generate proof using the .wasm and .zkey files (place them in public folder or use proper paths)
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "age_range.wasm",     // Path to WASM file
        "age_range_final.zkey" // Path to ZKey file
    );

    console.log("Proof:", proof);
    console.log("Public Signals:", publicSignals);

    return { proof, publicSignals };
}

// Function to verify zk-SNARK proof on-chain
export async function verifyOnChain(proof, publicSignals) {
    const signer = await provider.getSigner();

console.log(signer)

    // Replace with your contract's deployed address
    const contractAddress = "0xBcAA4e33BF33B31fDa10Be3deC3851eef425789e";

    const contract = new ethers.Contract(contractAddress, VerifierABI, signer);

    const { a, b, c } = proof;
    const inputs = publicSignals;

    try {
        const isValid = await contract.verifyProof(a, b, c, inputs);
        console.log("Proof is valid:", isValid);
        return isValid;
    } catch (error) {
        console.error("Verification failed:", error);
        return false;
    }
}
