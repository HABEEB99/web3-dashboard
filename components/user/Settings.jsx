import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { BiLogOut } from 'react-icons/bi';

const Settings = () => {
  const { logout, isUserUpdating, setUserData, user, userError } = useMoralis();
  const [userName, setUserName] = useState('');
  const updateUserName = (e) => {
    e.preventDefault();
    if (!userName) return;
    setUserData({
      username: userName,
    });

    console.log(userName);

    setUserName('');
  };

  return (
    <div className="flex z-[999] flex-col p-3 absolute top-[11vh] right-3 sm:right-6 md:right-12 lg:right-40 w-[20rem] h-[13rem] bg-header shadow-2xl rounded-lg">
      <form className="flex flex-col">
        <input
          className="h-12 outline-none  border-2 border-gray-300 px-1 rounded-lg"
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          placeholder="Change your display name"
        />
        <button
          type="submit"
          onClick={updateUserName}
          disabled={isUserUpdating}
          className="mt-4 w-full h-12 text-2xl font-bold text-white bg-gray-900 hover:bg-gray-700 rounded-md"
        >
          Change Display Name
        </button>
      </form>

      <div
        onClick={logout}
        className="flex items-center justify-center cursor-pointer mt-4 w-full h-12 bg-btn hover:bg-logo rounded-md"
      >
        <BiLogOut className=" text-2xl font-bold text-white" />
        <h2 className="ml-2 text-2xl font-bold text-white">Logout</h2>
      </div>
    </div>
  );
};

export default Settings;
