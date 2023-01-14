import React from 'react';
import { BsCartXFill } from 'react-icons/bs';

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh] w-full'>
      <p className='text-8xl'>
        <BsCartXFill />
      </p>
      <p className='text-2xl text-center'>{text}</p>
    </div>
  );
};

export default NoResults;
