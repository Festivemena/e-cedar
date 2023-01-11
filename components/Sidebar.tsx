import React, {useState} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import Discover from './Discover';
import { BsPersonFill } from 'react-icons/bs';
// import Footer from './Footer';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(true)
    const { pathname } = useRouter();
    const activeLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded';

    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded';
  return (
    <div>
   <div
        className='block xl:hidden m-2 ml-2 cursor-pointer mt-3 text-xl'
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle className='md:mt-2 md:h-8 w-8' /> : <AiOutlineMenu className='md:mt-2 md:h-8 w-8' />}
      </div>
      {showSidebar && (
        <div className='xl:w-[370px] w-10 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 '>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-[16px]'>
                  <AiFillHome />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  For You
                </span>
              </div>
            </Link>
          </div>
          <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
            <Link href='/user/mena'>
              <div className={pathname === '/' ? activeLink : normalLink}>
                <p className='text-[18px]'>
                  <BsPersonFill />
                </p>
                <span className='capitalize text-xl hidden xl:block'>
                  My Profile
                </span>
              </div>
            </Link>
          </div>
          <Discover />
          {/* <Footer /> */}
            </div>
        )}
    </div>
  )
}

export default Sidebar