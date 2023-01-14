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
import NoResults from '../../components/NoResults';
import DetailCard from '../../components/DetailCard'

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
  price: string;
}

interface IProps {
  details: Details[]
}

const Detail: NextPage<IProps> = ({ details }) => {
   // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const [isVideoMuted, ] = useState<boolean>(false);
  // const [isPostingComment, setIsPostingComment] = useState<boolean>(false);
  // const [comment, setComment] = useState<string>('');

  console.log(details)
  const router = useRouter();



  return (
    <>
        {details.length ? (
          details.map((detail: Details) => (
            <DetailCard lists={detail} key={detail._id} />
          ))
        ) : (
          <NoResults text={'NO New Products... Check Back Later'} />
        )
        }
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
