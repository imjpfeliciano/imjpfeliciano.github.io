import React from 'react'
import './SplashImage.scss'

interface SplashImageProps {
  src: string
  alt: string
}

const SplashImage: React.FC<SplashImageProps> = ({ src, alt }) => {
  return (
    <div className="splash-image md:m-[-60px]">
      {/* eslint-disable-next-line */}
      <img src={src} alt={alt} className="flex items-start p-[50px]" />
    </div>
  )
}

export default SplashImage
