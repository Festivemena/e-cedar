import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);  

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`993638040659-2m136lrh4cf02eh2770cd8nlvph4mg8u.apps.googleusercontent.com`}>
      <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
        <Header />
        <div className='flex gap-6 md:gap-2 '>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            <Sidebar />
          </div>
          <div className='mt-4 flex flex-col gap-6 overflow-auto h-[88vh] videos flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default MyApp;