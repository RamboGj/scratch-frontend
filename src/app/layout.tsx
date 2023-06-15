import React from 'react'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scratch',
  description:
    "Discover Scratch: The Ultimate Golf App for Match Booking, Competition, and Rewards! Join the golfing revolution and take your game to new heights with Scratch. Designed exclusively for golfers, Scratch lets you connect with fellow players, schedule matches, and compete against added friends for thrilling challenges. With Scratch, you can easily find golf courses near you, book tee times, and unlock exclusive rewards and prizes for your achievements on the fairway. Whether you're a seasoned golfer or just starting out, Scratch is the go-to platform for enhancing your golfing experience. Explore Scratch today and experience golf like never before!",
  keywords: [
    'Golf app',
    'Scratch golf app',
    'Golf match booking',
    'Golf competition app',
    'Golf app like Instagram',
    'Golf player community',
    'Golf friends network',
    'Golf match scheduling',
    'Golf challenges and rewards',
    'Golf course finder',
    'Tee time booking app',
    'Golfing achievements',
    'Golf prizes and rewards',
    'Golf app for players',
    'Enhance golf experience',
  ],
  openGraph: {
    title:
      'Scratch: The Ultimate Golf App for Match Booking, Competition, and Rewards',
    description:
      'Join the golfing revolution with Scratch. Connect with fellow players, schedule matches, compete with friends, win prizes, and unlock exclusive rewards. Enhance your golfing experience today!',
    url: 'https://scratch-frontend.vercel.app/',
    type: 'website',
    siteName: 'Scratch Golf App',
    locale: 'en_US',
    images: '/og.png',
  },
  twitter: {
    site: 'https://scratch-frontend.vercel.app/',
    images: '/og.png',
    card: 'summary',
    title:
      'Scratch: The Ultimate Golf App for Match Booking, Competition, and Rewards',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-screen w-full min-h-screen bg-bgColor">
        {children}
      </body>
    </html>
  )
}
