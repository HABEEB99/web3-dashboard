import React, { useState } from 'react';
import { GoDashboard } from 'react-icons/go';
import { useMoralis } from 'react-moralis';
import Avatar from '../user/Avatar';
import Settings from '../user/Settings';

const Header = () => {
  const { user } = useMoralis();
  const [settings, setSettings] = useState(false);
  return (
    <header className="bg-header w-screen h-[10vh] flex items-center">
      <div className="container flex items-center justify-between px-3 sm:px-6 md:px-12 lg:px-40">
        <div className="flex items-center">
          <GoDashboard className="text-3xl text-logo font-bold" />
          <h1 className="text-3xl text-btn ml-2 font-bold hidden lg:block">
            WEB3-DASHBOARD
          </h1>
        </div>

        <div
          onClick={() => setSettings(!settings)}
          className="flex items-center"
        >
          <Avatar />
          <span className="ml-2 text-gray-300">
            Welcome! {user.getUsername()}
          </span>
        </div>

        {settings && <Settings />}
      </div>
    </header>
  );
};

export default Header;
