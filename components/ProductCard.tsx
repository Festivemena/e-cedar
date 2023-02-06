import React,{useState} from 'react'
import { Product, OrderItem } from './../types';
import Link from 'next/link';
import useCartStore from '../store/cartStore';
import { NextPage } from 'next';
import { BsDot } from 'react-icons/bs';
import { Bungee, Noto_Sans, Chakra_Petch } from '@next/font/google';
import { client } from '../utils/sanity';
import { v4 } from 'uuid';
import { createOrGetCart } from '../utils';

interface IProps {
  list: Product;
}

const roboto = Chakra_Petch({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'optional'
})

const ProductCard: NextPage<IProps> = ({ list }) => {
  const { addItem } = useCartStore();
  const [cart, setCart] = useState(false)
  
  function add(list: any) {
    if (cart) {
    client
    .patch(list._id)
    // .setIfMissing({ orders: [] })
    // .insert('after', 'orders[-1]', [
    //   \\\\\\
    //     _key: v4(),\\\\\\\\\\\\\\
    //     _ref: list._id\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    .setIfMissing({orders: []})
    .insert('after', 'orders[-1]', [list._id,

    ])
    .commit({autoGenerateArrayKeys: true})
    .then (() => {console.log('item added')})
    .catch(error => {console.error('error adding', error)})
    setCart(false)
    } else {
      const doc = {
        _type: 'cart',
        name: 'Efemena Festus',
        orders: [],
      }
      client.create(doc).then((res) => {
        console.log(`Bike was created, document ID is ${res._id}`)
      })
      setCart(true)
    }
  }

  return (
    <div className={roboto.className}>
    <div className='flex flex-col border-2 py-1 rounded-xl shadow-xl border-gray-200'>
      <div className='lg:mx-1 flex gap-2 relative'>
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
              <p className='mt-[2px] pl-1 w-full flex text-left font-semibold text-[12px] md:text-[14px]'>{list.productName}</p>
            </Link>
            <p className='-mt-[2px] pr-1 w-full text-right font-thin text-[10px] md:text-[12px]'>NGN {list.price.toString().slice(0, -2)}</p>
            </div>
            <div onClick={() =>addItem(list)}
             className='text-[10px] font-light bg-[#F51997] h-6 py-1 px-2 cursor-pointer w-full text-white text-center rounded-md'>Add to Cart</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default ProductCard