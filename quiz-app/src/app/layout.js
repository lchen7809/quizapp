// src/app/layout.js
'use client';
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import SplashScreen from '../components/SplashScreen'
import './globals.css'
import Head from 'next/head';


export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)
  const pathname = usePathname();

  const homeImages = [
      '/home-bg-top.png',
      '/home-bg-bottom.png',
      '/home-spot.png'        // *** add any others here ***
    ];

    useEffect(() => {
      if (pathname === '/') {
        setShowSplash(true);
        const start = Date.now();
  
        // Prepare an array of promises that resolve when each image loads (or errors)
        const loadPromises = homeImages.map((src) =>
          new Promise((res) => {
            const img = new window.Image();
            img.src = src;
            img.onload = img.onerror = res;
          })
        );
  
        // Also a promise that resolves after 1 second
        const minimumTime = new Promise((res) => setTimeout(res, 2000));
  
        // Wait for _both_ the images _and_ the 1s timer
        Promise.all([...loadPromises, minimumTime]).then(() => {
          // It’s been at least 1s, and all images are ready
          setShowSplash(false);
        });
      }
    }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <body>

      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <div className="banner">
            <div className="container">
              GOVTECH DESIGN FESTIVAL | 1–31 JULY 2025
            </div>
          </div>
          <div className="container">{children}</div>
        </>
      )}
      </body>
    </html>
  )
}
