import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { GoVerified } from 'react-icons/go';
import Image from 'next/image';
import sds from '../../assets/6.png'
import { Product } from '../../data/datum'
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi';

const Detail = () => {
  // const [post, setPost] = useState(postDetails);
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [isVideoMuted, ] = useState<boolean>(false);
  // const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  // const [comment, setComment] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();
  const post = true
  const isPlaying = false
  const isVideoMuted = true
  const query = router.query

  return (
    <>
        <div className='flex w-full h-[100vh] absolute left-0 top-0 bg-white  flex-wrap lg:flex-nowrap'>
        <div className='opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 '>
              <p className='cursor-pointer ' onClick={() => router.back()}>
                <MdOutlineCancel className='text-black text-[35px] hover:opacity-90' />
              </p>
               <div className='w-full'>
            <Image src={sds} alt='Product Image' />
          </div>
            </div>
            <div className='w-full justify-between flex-1'>
            <div>Louis Vuitton</div><div>$7,000</div>
          </div>
        </div>
    </>
  );
};

export const getServerSideprops = async () => {

}

export default Detail;
