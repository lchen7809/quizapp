// src/app/layout.js
'use client';
import { useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import Banner from '../components/Banner';
import './globals.css'

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <html lang="en">
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
