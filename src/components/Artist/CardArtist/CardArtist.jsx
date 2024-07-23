import React, { useEffect, useRef } from 'react'
import './CardArtist.css'

const CardArtist = ({ name, src, color, artistColor, hoverColor, alt, slideDirection }) => {
    const cardRef = useRef();
    const imageRef = useRef();
    const cardArtistRef = useRef();

    useEffect(() => {
        if (cardRef.current) {
            const calcHeight = cardArtistRef.current.clientHeight - cardRef.current.clientHeight
            imageRef.current.style.height = `${cardRef.current.clientHeight + 15}px`;
            imageRef.current.style.top = `${calcHeight - 15}px`
            cardArtistRef.current.style.width = `${cardArtistRef.current.clientWidth - 10}px`
        }
    }, [])

    return (
        <div ref={cardRef} className={`CardArtist ${slideDirection === "up" ? "CardArtist_slideUp" : "CardArtist_slideDown"} w-full h-full relative pr-[35px] pb-[25px] overflow-hidden`}>
            <div className={`${color} w-full h-full relative pt-[25px] rounded-tl-[20px]`}>
                <h1 className='font-vastShadow text-white [writing-mode:vertical-lr] text-[28px]'>{name}</h1>
                <div ref={cardArtistRef} className={`${artistColor} absolute w-full h-full top-[25px] left-[45px]`}>
                    <img ref={imageRef} className={`w-full h-full absolute object-cover`} src={`./png/${src}`} alt={alt} />
                </div>
            </div>

            <button className='w-full h-[65%] absolute bottom-0 CardArtistPolygonContainer' onClick={() => alert(`HI ${name}`)}>
                <div className={`CardArtistPolygon ${hoverColor}`} />
                <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] flex flex-col items-center'>
                    <p className='text-white font-gothic font-semibold text-[18px] mt-[100%]'>View more</p>
                    <img src='./svg/arrow_down.svg' alt='arrow_down' className='w-[24px] h-[24px]' />
                </div>
            </button>
        </div>
    )
}

export default CardArtist