import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';


import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);  

  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`993638040659-2m136lrh4cf02eh2770cd8nlvph4mg8u.apps.googleusercontent.com`}>

            <Component {...pageProps} />
      
    </GoogleOAuthProvider>
  );
};

export default MyApp;