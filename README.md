# ZERO-KP VERIFY

Zero-KP Verify is a web-based application that leverages zero-knowledge proof (ZKP) technology to securely verify the identity of individuals without revealing sensitive personal information. This innovative solution ensures privacy by allowing users to prove their identity or specific attributes (such as age, name or address) without exposing the underlying data. By eliminating the need for traditional data-sharing methods, Zero-KP Verify enhances security and trust in digital interactions, making it ideal for use cases where privacy is a priority, such as financial services, online voting, and access control systems.



# 🚀 Features  
- Customizable Verification Parameters: Verifiers can request specific identity attributes such as name, age, and address for verification. The user (prover) can respond by proving these parameters without revealing the actual data, ensuring privacy through zero-knowledge proofs.
- QR Code-Based Verification: The application supports QR code scanning, allowing nearby devices to easily initiate identity verification requests. This feature streamlines the process for in-person or proximity-based identity verification.
- DigiLocker Integration: The prover can directly connect their DigiLocker account to provide verifiable credentials, such as government-issued IDs or certificates, while still maintaining privacy using zero-knowledge proofs.
- Secure and Private: Zero-KP Verify uses advanced cryptography to ensure that sensitive data is never exposed during verification, offering a secure and privacy-preserving solution for identity verification needs.




# 🛠️ Technologies Used  
- Solidity : For smart contracts to manage transactions on Ethereum.
- Circom : To create arithmetic circuits for zero-knowledge proofs, specifically zk-SNARKs
- SnarkJS : Provides the tools necessary for generating, verifying, and interacting with zk-SNARK proofs
- React : For building a dynamic user interface
- Vite : For fast and efficient development
- Tailwind CSS : For a beautiful and responsive design
- Ethers.js : For interacting with the Ethereum blockchain

# 📦 Getting Started  
**Prerequisites**  
- Node.js
- npm(usually installed with Node.js)
- MetaMask wallet

**Installation**  
1. Clone the repository:
   ```
   git clone https://github.com/PaiGoManh/Hackathon_ZKP
   
   cd Hackathon_ZKP
   ```
3. Install dependencies in UI and Backend
   ```
   cd ui npm install
   cd backend npm install
   ```
5. Run Command in both UI and Backend Folders
   ```
   cd ui npm run dev
   cd backend npm run dev
   ```
# 📜 License  
This project is licensed under the MIT License.   

# Contributions  
Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.
