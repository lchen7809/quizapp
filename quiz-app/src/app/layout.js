// src/app/layout.js
'use client';
import { useState } from 'react'
import SplashScreen from '../components/SplashScreen'
import './globals.css'

export default function RootLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <html lang="en">
      <body>
        {showSplash
          ? <SplashScreen onFinish={() => setShowSplash(false)} />
          : children
        }
      </body>
    </html>
  )
}
