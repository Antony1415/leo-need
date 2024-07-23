import React from 'react'

const CardAbout = ({ className, refCard, src, alt, objectPosition }) => {
  return (
    <div ref={refCard} className={`${className} rounded-[20px] overflow-hidden shadow-cardArtist`}>
      <img src={src} className={`${objectPosition} w-full h-full object-cover`} alt={alt} />
    </div>
  )
}

export default CardAbout