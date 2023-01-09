import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import Logo from '../assets/oie_jpg.png';
import styles from '../styles/Home.module.css';
import { BsCartDashFill } from 'react-icons/bs';
import { createOrGetUser } from '../utils';
import { IUser } from '../types';
import useAuthStore from '../store/authStore';

const Header = () => {
  // const { addUser, userProfile } = useAuthStore;
  const [user, setUser] = useState<IUser | null>();
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();  

  // useEffect(() => {
  //   setUser(userProfile);
  // }, [userProfile]);

  return (
    <div className='w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4'>
      <Link href='/'>
        <div className='w-[100px] md:w-[129px] -mt-[18px] lg:pt-[2px]  h-[40px]'>
          <Image
            className='cursor-pointer'
            src={Logo}
            alt='logo'
            width={200}
            height={50}
          />
        </div>
      </Link>

      <div className='relative hidden md:block'>
        <form
          className='absolute md:static rounded-full top-10 -left-20 bg-primary'
        >
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[300px] md:w-[350px] rounded-full  md:top-0'
            placeholder='Search accounts and videos'
          />
          <button
        
            className='absolute md:right-5 right-6 top-4 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400'
          >
            <BiSearch />
          </button>
        </form>
      </div>
      <div>
        {user? (
          <div className='flex gap-5 md:gap-10'>
            {/* <Link href='/upload'>
              <button className='border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2'>
                <IoMdAdd className='text-xl' />{' '}
                <span className='hidden md:block'>Upload </span>
              </button>
            </Link> */}
            {user.image && (
              <Link href={`/`}>
                <div>
                  
                </div>
              </Link>
            )}
              <button
                type='button'
                className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={() => {
                  
                }}
              >
                <div className='truncate'>Efemena</div>
                
              </button>
              <div className='py-2 rounded-full cursor-pointer outline-none'> <BsCartDashFill className='w-6 h-6' /> </div>
          </div>
          
        ) : (
            // <AiOutlineLogout color='red' fontSize={21} />
            <GoogleLogin 
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log("Error")}
            />
        )}
      </div>
    </div>
  );
};

export default Header;
