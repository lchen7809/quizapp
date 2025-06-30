// src/app/layout.js
'use client';
import { useState,useEffect } from 'react'
import SplashScreen from '../components/SplashScreen'
import { usePathname } from 'next/navigation';

import './globals.css'
import Head from 'next/head';


export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)
  const pathname = usePathname();


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // cleanup if unmounted early
  }, []);


  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="preload" as="image" href="/home-bg-top.webp" />
        <link rel="preload" as="image" href="/home-spot.webp" />
        <link rel="preload" as="image" href="/home-bg-bottom.webp" />
        <link rel="preload" as="image" href="/quiz-bg-top.webp" />
        <link rel="preload" as="image" href="/quiz-bg-bottom.webp" />

      </Head>
      <body>

        {showSplash
          ? <SplashScreen onFinish={() => setShowSplash(false)} />
          :  
          <>      
          <div className="container">
            <div className="banner">
              GOVTECH DESIGN FESTIVAL | 1-31 JULY 2025
            </div>
            {children}
          </div>
          </> 
        }
      </body>
    </html>
  )
}
