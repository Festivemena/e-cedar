import React from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'
import Profile from '../../assets/6.png'
import { MdOutlineCancel } from 'react-icons/md'

const inter = Inter({
  variable: '--inter-font', display: 'swap', subsets: ['latin'],
})

const user = () => {
    const router = useRouter()
  return (
         <>
         {/* bg-[#F51997]  */}
          <main className={styles.main}>
        <div className={inter.variable}>
        <div className='flex w-full h-[100vh] absolute left-0 top-0 flex-wrap lg:flex-nowrap'>
        <div className='opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 '>
              <p className='cursor-pointer ' onClick={() => router.back()}>
                <MdOutlineCancel className='text-black text-[35px] hover:opacity-90' />
              </p>
              </div>
            <div className='w-full pt-20 pb-5 flex'>
                <div className='w-full text-center'>
                    <Image className='rounded-xl ' alt='Profile Image' width={150} height={150} src={Profile}  />
                </div>
            </div>
            <div className='w-full h-full'>
                <div className='font-bold w-full text-lg text-center'>
                    <div className='w-5/6 rounded-md text-white text-center flex bg-[#F51997] my-2 py-2 mx-auto px-4'>Efemena Festus</div>
                    <div className='w-5/6 rounded-md text-white  text-center flex bg-[#F51997] my-2 py-2 mx-auto px-4'>BDPA, Ugbowo-Lagos Road.</div>
                    <div className='w-5/6 rounded-md text-white text-center flex bg-[#F51997] my-2 py-2 mx-auto px-4'>Benin City</div>
                    <div className='w-5/6 rounded-md text-white text-center flex bg-[#F51997] my-2 py-2 mx-auto px-4'>Edo State</div>
                    </div>
            </div>
        </div>
        </div>
        </main>
    </>
  )
}

export default user