import React, { useEffect, useRef, useState } from 'react'
import { CardAbout } from './CardAbout';
import { BackgroundImageAnimation, CardContainerAnimation, HonamiCardAnimation, HonamiDrumCardAnimation, IchikaCardAnimation, IchikaSnowCardAnimation, SakiCardAnimation, SakiLanternCardAnimation, ShihoGuitar2CardAnimation, ShihoGuitarCardAnimation, SkewedElementAnimation, TextElementAnimation } from '../../utils/AboutPageAnimation';
import { Button } from '../Button';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutContainerRef = useRef();
  const backgroundImageRef = useRef();
  const textElementRef = useRef();
  const skewedElement = useRef();

  // Left Card useRef
  const leftCardRef = useRef();
  const honamiCardRef = useRef();
  const sakiLanternCardRef = useRef();
  const ichikaCardRef = useRef();
  const shihoGuitar2CardRef = useRef();

  // Right Card useRef
  const rightCardRef = useRef();
  const sakiCardRef = useRef();
  const shihoGuitarCardRef = useRef();
  const ichikaSnowCardRef = useRef();
  const honamiDrumCardRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (aboutContainerRef.current) {
        CardContainerAnimation(leftCardRef, aboutContainerRef, scrollY, window.innerHeight, "left");
        CardContainerAnimation(rightCardRef, aboutContainerRef, scrollY, window.innerHeight, "right");
        BackgroundImageAnimation(backgroundImageRef, aboutContainerRef, scrollY, window.innerHeight);
        TextElementAnimation(textElementRef, aboutContainerRef, scrollY, window.innerHeight);
        SkewedElementAnimation(skewedElement, aboutContainerRef, scrollY, window.innerHeight);

        // Left Card Animation
        HonamiCardAnimation(honamiCardRef, aboutContainerRef, scrollY, window.innerHeight);
        SakiLanternCardAnimation(sakiLanternCardRef, aboutContainerRef, scrollY, window.innerHeight);
        IchikaCardAnimation(ichikaCardRef, aboutContainerRef, scrollY, window.innerHeight);
        ShihoGuitar2CardAnimation(shihoGuitar2CardRef, aboutContainerRef, scrollY, window.innerHeight);

        // Right Card Animation
        SakiCardAnimation(sakiCardRef, aboutContainerRef, scrollY, window.innerHeight);
        ShihoGuitarCardAnimation(shihoGuitarCardRef, aboutContainerRef, scrollY, window.innerHeight);
        IchikaSnowCardAnimation(ichikaSnowCardRef, aboutContainerRef, scrollY, window.innerHeight);
        HonamiDrumCardAnimation(honamiDrumCardRef, aboutContainerRef, scrollY, window.innerHeight)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY])

  return (
    <>
      <div className='w-full h-[200px] bg-[#1845CC]' />

      <section ref={aboutContainerRef} className='w-screen h-full relative'>
        <div
          ref={leftCardRef}
          className='
            w-[35%] h-[887px] bg-gradient-to-l from-[#1845CC]/0 to-[#1845CC] from-0% to-20% absolute left-0
            flex py-[28px] pl-[18px] gap-[43px] transition-all duration-75
          '
        >
          <div className='flex flex-col gap-[80px]'>
            <CardAbout refCard={honamiCardRef} className={'w-[193px] h-[352px]'} src={'./png/Honami.png'} alt={'Honami'} objectPosition={'object-honamiPosition'} />
            <CardAbout refCard={sakiLanternCardRef} className={'w-[193px] h-[239px]'} src={'./png/Saki_Lantern.png'} alt={'Saki_Lantern'} />
          </div>

          <div className='flex flex-col pt-[73px] gap-[70px]'>
            <CardAbout refCard={ichikaCardRef} className={'w-[193px] h-[352px]'} src={'./png/Ichika.png'} alt={'Ichika'} />
            <CardAbout refCard={shihoGuitar2CardRef} className={'w-[193px] h-[288px]'} src={'./png/Shiho_Guitar_2.png'} alt={'Shiho_Guitar_2'} />
          </div>
        </div>

        <div
          ref={rightCardRef}
          className='
            w-[35%] h-[887px] bg-gradient-to-r from-[#1845CC]/0 to-[#1845CC] from-0% to-20% absolute right-0
            flex py-[28px] gap-[29px] justify-end pr-[27px] transition-all duration-75
          '
        >
          <div className='flex flex-col gap-[75px] items-end'>
            <CardAbout refCard={sakiCardRef} className={'w-[193px] h-[288px]'} src={'./png/Saki.png'} alt={'Saki'} objectPosition={'object-sakiPosition'} />
            <CardAbout refCard={shihoGuitarCardRef} className={'w-[193px] h-[323px]'} src={'./png/Shiho_Guitar.png'} alt={'Shiho_Guitar'} objectPosition={'object-shihoGuitarPosition'} />
          </div>

          <div className='flex flex-col pt-[62px] items-end gap-[132px]'>
            <CardAbout refCard={ichikaSnowCardRef} className={'w-[193px] h-[258px]'} src={'./png/Ichika_Snow.png'} alt={'Ichika_Snow'} />
            <CardAbout refCard={honamiDrumCardRef} className={'w-[193px] h-[276px]'} src={'./png/Honami_Drum.png'} alt={'Honami_Drum'} objectPosition={'object-honamiDrumPosition'} />
          </div>
        </div>

        <div className='relative w-full h-full'>
          <div ref={backgroundImageRef} className={`absolute w-full h-full pb-[50px] pl-[100px] -z-[10] brightness-100`}>
            <img className='w-full h-full object-left-bottom' src="./png/Ichika_A_Vow_Kept_in_One's_Heart.png" alt='ichika' />
          </div>

          <div
            ref={textElementRef}
            className={`
                absolute font-gothic font-semibold text-white text-center w-full flex flex-col gap-[30px] items-center
                z-10 -bottom-14 left-[50%] -translate-x-[50%] translate-y-0 opacity-0
                `}
          >
            <h2 className='text-[50px]'>A super-dimensional experience.</h2>

            <div className='text-[25px]'>
              <h3>The possibilities of virtual artists are endles.</h3>
              <h3>They inspire people and spread emotions.</h3>
              <h3>We will continue to deliver "emotions that go beyond emotion" to the world.</h3>
            </div>

            <Button type={"glowing"}>
              <p className='font-gothic font-semibold text-[24px] text-white'>Learn More</p>
            </Button>
          </div>
        </div>

        <div ref={skewedElement} className='w-full h-[300px] opacity-0 absolute -z-[5] left-0 -bottom-[500px] skew-y-6 bg-gradient-to-b from-black/0 to-black from-0% to-20%' />
      </section>
    </>
  )
}

export default About