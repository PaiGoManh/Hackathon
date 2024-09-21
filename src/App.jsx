import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ZKSnarkVerification from './components/ZKSnarkVerification';
// import Home from './pages/Homepage';
// import Prover from './pages/Prover/Main';
// import Verifier from './pages/Verifier/Main';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/prover/*" element={<Prover />} />
    //     <Route path="/verifier/*" element={<Verifier />} />
    //   </Routes>
    // </Router>
      <div className="App">
            <ZKSnarkVerification />
        </div>
  );
}

export default App;
