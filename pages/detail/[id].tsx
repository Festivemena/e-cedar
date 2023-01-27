import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { GoVerified } from 'react-icons/go';
import Image from 'next/image';
import sds from '../../assets/6.png'
// import { Product } from '../../types'
import axios from 'axios';
import Link from 'next/link';
import { NextPage } from 'next';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';
import { BASE_URL } from '../../utils'
import useCartStore from '../../store/cartStore';
import NoResults from '../../components/NoResults';
import { Bungee, Noto_Sans, Chakra_Petch } from '@next/font/google';

interface Details {
  category: string;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  productName: string;
  productDetails: string;
  price: number;
}

interface IProps {
  details: Details
}

const roboto = Chakra_Petch({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'optional'
})

const Detail: NextPage<IProps> = ({ details }) => {
   // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [isVideoMuted, ] = useState<boolean>(false);
  // const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  // const [comment, setComment] = useState<string>('');

  console.log(details)
  const router = useRouter();
  const { addItem} = useCartStore();

  return (
    < >
    <div className={roboto.className}>
     <div className='flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap'>
          <div className='relative flex-2 w-[1000px] lg:w-11/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center'>
            <div className='opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 z-50'>
              <p className='cursor-pointer ' onClick={() => router.back()}>
                <MdOutlineCancel className='text-primary text-[35px] hover:opacity-90' />
              </p>
            </div>
            <div className='relative'>
              <div className='lg:h-[100vh] h-[60vh]'>
                <img
                  onClick={() => {}}
                  alt={details.productName}
                  src={details.productImage.asset.url}
                  className=' h-[60vh] w-[350px] lg:w-[600px] lg:h-full px-3 cursor-pointer' >
                </img>
              </div>
            </div>
          </div>
          <div className='relative w-[1000px] md:w-[900px] lg:w-[700px]'>
            <div className='`flex-1'>
            <div className='lg:mt-20 mt-10'>
                    <div className='text-xl font-bold lowercase tracking-wider flex gap-2 items-center justify-center'>
                    </div>
                    <p className='text-xl w-full text-center font-semibold'>{details.productName}</p>
                    <p>NGN {details.price.toString().slice(0, -2)}</p>
                  </div>
                </div>
              <div className='px-10'>
                <p className=' text-md text-gray-600'>{details.productDetails}</p>
              </div>
              <div onClick={() =>addItem(details)} className='bg-green-700 w-36 cursor-pointer text-white px-3 text-right rounded-md'>Add to Cart</div>
            </div>
            </div>
            </div>
    </>
  );
};

export const getServerSideProps = async (
  {
  params: { id },
}: {
  params: { id: string };
}
) => {
  const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
  
  return {
    props: { 
      details: data
    },
  };
};

export default Detail;
