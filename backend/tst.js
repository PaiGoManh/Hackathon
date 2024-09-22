import { groth16 } from "snarkjs";
//import { readFileSync } from "fs";

export async function run() {
    const { proof ,publicSignals} = await groth16.fullProve({age:9, min_age:8, max_age:9},
        './age_range.wasm',
        './age_range_final.zkey');

    console.log("Proof: ");
        
        console.log(publicSignals);
        const pSignal=['1'];
        console.log(pSignal)
    const vKey = JSON.parse(readFileSync("verification_key.json"));
        
    const res = await groth16.verify(vKey, pSignal, proof);
console.log(res)
    if (res === true) {
        console.log("Verification OK");
    } else {
        console.log("Invalid proof");
    }
    return res

}

export default run;