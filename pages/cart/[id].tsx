import React, {useState} from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../../assets/cedar-trans.png';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import useCartStore from '../../store/cartStore';
import { BsTrashFill, BsX } from 'react-icons/bs';

interface cartItem {
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

const Cart = () => {
  const {items, total, clearCart, removeItem} = useCartStore();
  const router = useRouter();
  const quantity = 1; 

  const config = {
    reference: (new Date()).getTime().toString(),
    phone: '08155784038',
    email: "obotorf25@gmail.com",
    amount: total,
    publicKey: 'pk_test_7a57f933c0b9aa7bb35273b1acdbf8562c330755',
    firstname: 'Festus',
    lastname: 'Mena',
};

const onSuccess = (reference: void) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    alert('you have successfully paid for item(s)...')
    router.back();
};

const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    alert('Please pay for your products now... while they are still available')
    console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay Now</button>
        </div>
    );
};

const componentProps = {
  ...config,
  text: 'Paystack Button Implementation',
  onSuccess,
  onClose
};

  return (
    <div className='h-[100vh] w-full'>
      <div className='w-full flex'>
      <MdOutlineCancel fontSize={18} className='text-[35px] text-black' onClick={() => router.back()} />
      {/* <div className='w-[100px] md:w-[129px] lg:-mt-[45px]  h-[40px]'>
          <Image
            className='cursor-pointer rounded-3xl	'
            src={Logo}
            alt='logo'
            width={150}
            height={50}
          />
        </div> */}
        </div>
      <div className='mt-3'>
      {
        items.map((item:cartItem) => (
          <div className='flex mx-3 mt-2 w-full' key={item._id}>
             <img
              src={item.productImage.asset.url}
              className='lg:w-[350px] h-[70px] md:h-[400px] md:w-[400px] lg:h-[350px] w-[70px] rounded-xl cursor-pointer pl-1'
            ></img>
            <div className='ml-3 w-1/3 mt-4'>
          <div className='flex text-[14px]'>{item.productName}</div>
          <div className='text-[12px]'>{item.price.toString().slice(0, -2)} - {quantity} Unit(s)</div> </div>
            <button className='text-right mx-auto' onClick={() => {removeItem(item._id)}}><BsX /></button>
          </div>
        ))
      }
      </div>
      <div className='text-[12x] w-full text-center cursor-pointer text-red-600' onClick={() => clearCart()}>Clear Cart</div>
      <p className='bottom-0 text-[16px]'>Total: NGN {total.toString().slice(0, -2)}</p>

      <PaystackHookExample />
        {/* <PaystackButton {...componentProps} />
        <PaystackConsumer {...componentProps} >
            {({initializePayment}) => <button onClick={() => initializePayment()}>Paystack Consumer Implementation</button>}
        </PaystackConsumer> */}
    </div>
  )
}

export default Cart