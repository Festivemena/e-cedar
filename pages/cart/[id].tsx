import React, {useState} from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useRouter } from 'next/router';
import { usePaystackPayment, PaystackButton, PaystackConsumer } from 'react-paystack';
import useCartStore from '../../store/cartStore';

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
  const amount = 1000000;
  const router = useRouter();
 

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: 20000,
    publicKey: 'pk_test_7a57f933c0b9aa7bb35273b1acdbf8562c330755',
    firstname: 'cool',
    lastname: 'story',
    split: { //if you want to use transaction split
        "type": "percentage",
        "bearer_type": "all",
        "subaccounts": [
            {
                "subaccount": "ACCT_mtl3xzwjfhcldkw",
                "share": 30
            },
            {
                "subaccount": "ACCT_y19ht107y44o294",
                "share": 20
            }
        ]
    }
};

const onSuccess = (reference: void) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
};

const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
}

const PaystackHookExample = () => {
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
            }}>Paystack Hooks Implementation</button>
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
      <div className='w-full flex justify-between'>
      <MdOutlineCancel className='text-black' onClick={() => router.back()} />
      <div></div></div>
      <div className='grid grid-cols-2'>
      {
        items.map((item:cartItem) => (
          <div key={item._id}>
             <img
              src={item.productImage.asset.url}
              className='lg:w-[350px] h-[100px] md:h-[400px] md:w-[400px] lg:h-[350px] w-[100px] rounded-xl cursor-pointer pl-1'
            ></img>
           {item.productName} - {item.price}
            <button onClick={() => {removeItem(item._id)}}>Remove</button>
          </div>
        ))
      }
      </div>
      <div onClick={() => clearCart()}>Clear</div>
      <p className='bottom-0'>Total: NGN {amount / 100}</p>

<PaystackButton className="paystack-button" {...componentProps} />
    </div>
  )
}

export default Cart