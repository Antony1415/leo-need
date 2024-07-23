import React, { useEffect, useRef, useState } from 'react'

const CardAlbum = ({ className, src, alt, name, date }) => {
  const albumRef = useRef()
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("AAAA", window.scrollY);
      // console.log("prae", (window.scrollY + albumRef.current.offsetParent.offsetTop));
      console.log("count", (albumRef.current.offsetParent.offsetTop + albumRef.current.offsetTop));
      if (window.scrollY > (albumRef.current.offsetParent.offsetTop + albumRef.current.offsetTop - (albumRef.current.clientHeight))) {
        setShowCard(true)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  console.log("SHOW", showCard);

  return (
    <div ref={albumRef} className={`${className} ${showCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-[500ms] rounded-[10px] px-[10px] py-[13px] flex flex-col gap-[15px] font-gothic text-[20px] text-white shadow-[4px_4px_6px_0_rgba(0,0,0,0.5)]`}>
      <img className='w-full h-full shadow-[4px_4px_5px_0_rgba(0,0,0,0.38)]' src={src} alt={alt} />
      <p className='font-semibold'>{name}</p>
      <p>{date}</p>
    </div>
  )
}

export default CardAlbum