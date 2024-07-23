import React, { useEffect, useRef, useState } from 'react'
import CardArtist from './CardArtist/CardArtist'

const Artist = () => {
    const [showCard, setShowCard] = useState(false);
    const cardContainerRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > (cardContainerRef.current.offsetTop - (cardContainerRef.current.clientHeight / 1.5))) {
                setShowCard(true)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <section className='w-screen h-screen mt-[600px] flex flex-col'>
            <h1 className='font-josefin italic font-semibold text-[60px] text-center'>Artist</h1>

            <div ref={cardContainerRef} className='py-[80px] px-[100px] flex-1 flex items-center justify-center gap-[55px] overflow-hidden'>
                {showCard && (
                    <>
                        <CardArtist name={"HOSHINO ICHIKA"} color={"bg-[#10439F]"} artistColor={"bg-[#95C4E7]"} hoverColor={"bg-[#5FA7DBD1]/[0.82]"} src={'Artist_Ichika.png'} slideDirection={"down"} />
                        <CardArtist name={"TENMA SAKI"} color={"bg-[#FFBE0F]"} artistColor={"bg-[#EEF07B]"} hoverColor={"bg-[#DBC05FD1]/[0.82]"} src={'Artist_Saki.png'} slideDirection={"up"} />
                        <CardArtist name={"MOCHIZUKI HONAMI"} color={"bg-[#C73659]"} artistColor={"bg-[#E48F7C]"} hoverColor={"bg-[#DB5F5FD1]/[0.82]"} src={'Artist_Honami.png'} slideDirection={"down"} />
                        <CardArtist name={"HINOMORI SHIHO"} color={"bg-[#01B209]"} artistColor={"bg-[#A5F598]"} hoverColor={"bg-[#5FDB89D1]/[0.82]"} src={'Artist_Shiho.png'} slideDirection={"up"} />
                    </>
                )}
            </div>
        </section>
    )
}

export default Artist