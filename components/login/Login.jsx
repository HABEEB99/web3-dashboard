import React from 'react';
import { useMoralis } from 'react-moralis';
import { GoDashboard } from 'react-icons/go';

const Login = () => {
  const { authenticate, login } = useMoralis();
  return (
    <div className="w-screen h-screen bg-body flex items-center justify-between">
      <div className="container flex flex-col items-center space-y-8">
        <GoDashboard className="text-5xl text-btn font-bold animate-spin" />
        <h1 className="text-xl md:text-4xl font-bold text-header">
          WELCOME TO WEB3-DASHBOARD
        </h1>
        <button
          className="bg-btn hover:bg-logo w-[22rem] h-16 text-2xl rounded-full text-white font-bold"
          onClick={() =>
            authenticate({
              signingMessage: 'Welcome to Web3-Dashboard',
            })
          }
        >
          Sign in with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
