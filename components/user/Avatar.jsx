import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Avatar = ({ username }) => {
  const { user } = useMoralis();
  return (
    <div className="items-center justify-center flex relative rounded-full border-4 border-btn h-12 w-12">
      <Image
        className="self-center rounded-full"
        alt="user"
        src={`https://avatars.dicebear.com/api/adventurer/${
          username || user.getUsername()
        }.svg`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default Avatar;
