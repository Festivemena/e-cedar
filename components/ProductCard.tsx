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
    <div className='flex flex-col border-2 py-1 rounded-xl shadow-xl border-gray-200'>
      <div className='lg:ml-2 flex gap-2 relative'>
        <div
          // onMouseEnter={() => setIsHover(true)}
          // onMouseLeave={() => setIsHover(false)}
          className='rounded-3xl'
        >
          <Link href={`/detail/${list._id}`}>
            <img
              src={list.productImage.asset.url}
              className='lg:w-[350px] h-[150px] md:h-[400px] md:w-[400px] lg:h-[350px] w-[150px] rounded-xl cursor-pointer pl-1'
            ></img>
          </Link>
          <div className='flex-1 text-center'>
          <Link href={`/detail/${list._id}`}>
              <p className='mt-[2px] pl-1 w-full flex text-left font-semibold text-[16px] '>{list.productName}</p>
            </Link>
            <p className='-mt-[2px] pr-1 w-full text-right  font-thin text-[12px]'>{list.price}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard