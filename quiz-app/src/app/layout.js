// src/app/layout.js
'use client';
import { useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import './globals.css'
import Head from 'next/head';


export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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
