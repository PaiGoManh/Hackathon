// Server-side (Express.js)
const express = require('express');
const app = express();
const cors = require('cors');
const snarkjs = require('snarkjs');
const fs = require('fs');
app.use(cors());

app.get('/read-file',async (req, res) => {
    const { proof ,publicSignals} = await snarkjs.groth16.fullProve({age:9, min_age:8, max_age:9},
        './age_range.wasm',
        './age_range_final.zkey');

    console.log("Proof: ");
        
        console.log(publicSignals);
        const pSignal=['1'];
        console.log(pSignal)
    const vKey = JSON.parse(fs.readFileSync("verification_key.json"));
    const result = await snarkjs.groth16.verify(vKey, pSignal, proof);
    console.log(result)
        if (result === true) {
            console.log("Verification OK");
        } else {
            console.log("Invalid proof");
        }
      res.json(result);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
