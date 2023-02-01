import React, { useState } from 'react';
import { SanityAssetDocument } from '@sanity/client';
import { useRouter } from 'next/router';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import Image from 'next/image';
import useAuthStore from '../store/authStore';
import { BASE_URL } from '../utils';
import { client } from '../utils/sanity';
import { category } from '../utils/constants';

const Upload = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [topic, setTopic] = useState('');
    const [loading, setLoading] = useState<Boolean>(false);
    const [savingProduct, setSavingProduct] = useState<Boolean>(false);
    const [productImageAsset, setProductImageAsset] = useState<SanityAssetDocument | undefined>();

    // const userProfile: any = useAuthStore((state) => state.userProfile);
    const router = useRouter();

    // useEffect(() => {
    //     if (!userProfile) router.push('/');
    //   }, [userProfile, router]);
    
      const uploadProduct = async (e: any) => {
        const selectedFile = e.target.files[0];
        const fileTypes = ['jpeg/jpg'];
    
        // uploading asset to sanity
        if (fileTypes) {
          
          setLoading(true);
    
          client.assets
            .upload('file', selectedFile, {
              contentType: selectedFile.type,
              filename: selectedFile.name,
            })
            .then((data) => {
              setProductImageAsset(data);
              setLoading(false);
            });
        } else {
          setLoading(false);
          
        }
      };
    
      const handlePost = async () => {
        if (productName && productImageAsset?._id && price && category) {
          setSavingProduct(true);
    
          const doc = {
            _type: 'product',
            productName,
            productImage: {
              _type: 'file',
              asset: {
                _type: 'reference',
                _ref: productImageAsset?._id,
              },
            },
            price,
            category,
          };
    
          await axios.post(`${BASE_URL}/api/upload`, doc);
            
          router.push('/');
        }
      };
    
      const handleDiscard = () => {
        setSavingProduct(false);
        setProductImageAsset(undefined);
        setProductName('');
        setPrice('');
        setTopic('');
      };
    

  return (
   <div className='flex w-full h-[100vh] absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center'>
      <div className=' bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6'>
        <div>
          <div>
            <p className='text-2xl font-bold'>Upload Product</p>
          </div>
          <div className=' border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
            {loading ? (
              <p className='text-center text-3xl text-red-400 font-semibold'>
                Uploading...
              </p>
            ) : (
              <div>
                {!productImageAsset ? (
                  <label className='cursor-pointer'>
                    <div className='flex flex-col items-center justify-center h-full'>
                      <div className='flex flex-col justify-center items-center'>
                        <p className='font-bold text-xl'>
                          <FaCloudUploadAlt className='text-gray-300 text-6xl' />
                        </p>
                        <p className='text-xl font-semibold'>
                          Select Product to upload
                        </p>
                      </div>

                      <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                        Upload Stunning Image of the Product
                      </p>
                      <p className='bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                        Select file
                      </p>
                    </div>
                    <input
                      type='file'
                      name='upload-video'
                      onChange={(e) => uploadProduct(e)}
                      className='w-0 h-0'
                    />
                  </label>
                ) : (
                  <div className=' rounded-3xl w-[300px]  p-4 flex flex-col gap-6 justify-center items-center'>
                    <Image 
                      className='rounded-xl h-[462px] mt-16 bg-black'
                     width={250}
                     alt='upload'
                     height={462}
                      src={productImageAsset?.url}
                    />
                    <div className=' flex justify-between gap-20'>
                      <p className='text-[14px]'>{productImageAsset.originalFilename}</p>
                      <button
                        type='button'
                        className=' rounded-full bg-gray-200 text-red-400 p-2 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                        onClick={() => setProductImageAsset(undefined)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
        </div>
        <div className='flex flex-col mt-12 gap-3 pb-10'>
          <label className='text-md font-medium '>Product Name</label>
          <input
            type='text'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
           <label className='text-md font-medium '>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          <label className='text-md font-medium '>Choose a category</label>
          <input
            type='text'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
          />
          {/* <select
            onChange={(e) => {
              setTopic(e.target.value);
            }}
            className='outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer'
          >
            {category.map((item) => (
              <option
                key={item.name}
                className=' outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300'
                value={item.name} 
              >
                {item.name}
              </option>
            ))}
          </select> */}
          <div className='flex gap-6 mt-10'>
            <button
              onClick={handleDiscard}
              type='button'
              className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
            >
              Discard
            </button>
            <button
              disabled={productImageAsset?.url ? false : true}
              onClick={handlePost}
              type='button'
              className='bg-[#F51997] text-white cursor-pointer text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
            >
              {savingProduct ? 'Posting...' : 'Post'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upload