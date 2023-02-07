import React, {useState} from 'react'
import useCartStore from '../store/cartStore';
import { useRouter } from 'next/router';
import { usePaystackPayment } from 'react-paystack';
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import { BASE_URL } from '../utils';


const Checkout = () => {
  const {total, items} = useCartStore();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const router = useRouter()

const config = {
    reference: (new Date()).getTime().toString(),
    phone: phoneNumber,
    email: email,
    amount: total,
    publicKey: 'pk_test_7a57f933c0b9aa7bb35273b1acdbf8562c330755',
    firstname: 'Festus',
    lastname: 'Mena',
};

const handlePay = async () => {  
  const doc = {
    _type: 'cart',
    _id: (new Date()).getTime().toString(),
    firstName: firstName,
    lastName: lastName,
    address: address,
    phoneNumber: phoneNumber,
    email: email,
    // orders: items[] = [],
    total: total.toString().slice(0, -2)
    
  };

  await axios.post(`${BASE_URL}/api/upload`, doc);
    
  router.push('/');

};

const onSuccess = (reference: void) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    alert('you have successfully paid for item(s)...')
    handlePay();
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
        <div className=' w-full text-center'>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Pay NGN{total.toString().slice(0, -2)}</button>
        </div>
    );
};

  return (
    <div className='h-screen'>
        <div className='flex w-full text-center'>
         <MdOutlineCancel fontSize={18} className='text-[35px] text-black' onClick={() => router.back()} />
         <div className='flex text-center w-full mx-auto'>CHECKOUT</div></div>
         <form>
         <div className='flex flex-col mt-12 gap-2 mx-4 pb-10'>
          <label className='text-md font-medium '>First Name</label>
          <input
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          <label className='text-md font-medium '>Last Name</label>
          <input
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
           <label className='text-md font-medium '>Phone Number</label>
          <input
            type='text'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          <label className='text-md font-medium '>E-mail</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          <label className='text-md font-medium '>Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          <div className='flex gap-6 mt-10'>
          </div>
        </div>
         </form>
        <PaystackHookExample/></div>
  )
}

export default Checkout