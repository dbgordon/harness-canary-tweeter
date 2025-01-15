'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function CanaryPage() {
  const [isTweeting, setIsTweeting] = useState(false)

  const handleCanaryClick = () => {
    setIsTweeting(true)
    const audio = new Audio('/sounds/chirp.mp3')
    audio.play().catch(error => console.error('Error playing audio:', error))
    setTimeout(() => setIsTweeting(false), 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-sky-100">
      <h1 className="text-3xl font-bold mb-8 text-yellow-600">Click the Canary to Hear It Tweet!</h1>
      <div 
        className={`cursor-pointer transform transition-transform duration-200 ${isTweeting ? 'scale-110' : 'hover:scale-105'}`}
        onClick={handleCanaryClick}
      >
        <Image
          src="/images/canary.png"
          alt="Canary"
          width={300}
          height={300}
          className="rounded-full shadow-lg"
        />
      </div>
      <p className="mt-4 text-gray-600">
        {isTweeting ? 'Tweet! Tweet!' : 'Click me!'}
      </p>
    </div>
  )
}