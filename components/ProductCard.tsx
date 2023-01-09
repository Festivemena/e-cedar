import React from 'react'
import { Product } from './../types';
import Link from 'next/link';
import { NextPage } from 'next';
import { BsDot } from 'react-icons/bs';

interface IProps {
  list: Product;
}

const ProductCard: NextPage<IProps> = ({ list }) => {
  return (
    <div className='flex flex-col border-b-2 border-gray-200'>
      <div className='lg:ml-2 flex gap-2 relative'>
        <div
          // onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          className='rounded-3xl'
        >
          <Link href={`/`}>
            <img
              src={list.productImage.asset.url}
              className='lg:w-[350px] h-[125px] md:h-[400px] md:w-[400px] lg:h-[350px] w-[125px] rounded-2xl cursor-pointer bg-gray-100'
            ></img>
          </Link>
          <div className='flex-1 text-center'>
          <Link href={`/`}>
              <p className='mt-[2px] w-full flex text-left font-bold text-[16px] '>{list.productName}</p>
            </Link>
            <p className='-mt-[2px] w-full text-right  font-thin text-[10px]'>{list.price}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard