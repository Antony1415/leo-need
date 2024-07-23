import React from 'react'
import CardAlbum from './CardAlbum/CardAlbum'
import { Button } from '../Button'

const ProductRelease = () => {
  return (
    <section className='relative mt-[200px] w-screen h-fit flex flex-col gap-[70px]'>
      <div className='w-full h-[250px] absolute -z-[5] -top-[125px] -skew-y-6 bg-[#1845CC]' />
      <div className='w-full h-[50px] absolute -z-[4] -top-[30px] bg-gradient-to-b from-[#1845CC] to-[#002A6F] from-0% to-100%' />
      <h1 className='text-white font-josefin font-semibold text-[60px] absolute -top-[75px] left-[50%] -translate-x-[50%]'>Release</h1>
      <img className='w-full h-full object-cover brightness-[0.80] absolute -z-[5] left-0' src='./png/release_bg.png' alt='release_bg' />

      <section className='w-full h-[70%] flex flex-col items-center gap-16'>
        <div className="w-full h-full flex px-[10%] gap-[50px]">
          <div className='flex-1 flex flex-col pb-[3%] pt-[10%] items-center'>
            <CardAlbum className={'bg-[#276078] w-[80%]'} src={'./png/stage_of_sekai.png'} alt={'stage_Of_sekai'} name={"STAGE OF SEKAI"} date={"2021/11/18"} />
            <CardAlbum className={'bg-[#793E50] w-[80%] mt-[100%]'} src={'./png/glow.png'} alt={'glow'} name={"Glow"} date={"2023/06/23"} />
          </div>

          <div className='flex-1 flex justify-center pb-[15%] mt-[40%] w-[80%] h-fit'>
            <CardAlbum className={'bg-[#236798] w-[80%]'} src={'./png/aioi.png'} alt={'aioi'} name={"Aioi"} date={"2023/04/11"} />
          </div>

          <div className='flex-1 flex flex-col w-full h-full pb-[3%] items-center pt-[20%]'>
            <CardAlbum className={'bg-[#AB63E3] w-[80%]'} src={'./png/ray.png'} alt={'ray'} name={"ray"} date={"2021/10/12"} />
            <CardAlbum className={'bg-[#798242] w-[80%] mt-[100%]'} src={'./png/stella.png'} alt={'stella'} name={"Stella"} date={"2020/10/18"} />
          </div>
        </div>
        
        <Button type={"glowing"} className={'mt-auto'}>
          <p className='font-gothic font-semibold text-[24px] text-white'>View All</p>
        </Button>
      </section>

      <section className='w-full h-[30%] text-white px-[230px] flex flex-col items-center gap-[45px] pb-[55px]'>
        <h1 className='font-josefin font-semibold text-[60px] italic'>Information</h1>

        <div className='flex flex-col w-full text-[15px] font-gothic'>
          <div className='flex flex-col py-[30px] gap-[10px] border-y-[2px] border-white'>
            <div className='flex gap-[15px]'>
              <h3 className='pr-[15px] border-r-[3px] border-white font-extrabold'>2024-06-24</h3>
              <h3 className='font-semibold'>Konteks</h3>
            </div>
            <h3 className='font-medium'>Lorenim ipsum Lorenim ipsumLorenim ipsumLorenim ipsumLorenim ipsum</h3>
          </div>
          <div className='flex flex-col py-[30px] gap-[10px] border-b-[2px] border-white'>
            <div className='flex gap-[15px]'>
              <h3 className='pr-[15px] border-r-[3px] border-white font-extrabold'>2024-06-24</h3>
              <h3 className='font-semibold'>Konteks</h3>
            </div>
            <h3 className='font-medium'>Lorenim ipsum Lorenim ipsumLorenim ipsumLorenim ipsumLorenim ipsum</h3>
          </div>
          <div className='flex flex-col py-[30px] gap-[10px] border-b-[2px] border-white'>
            <div className='flex gap-[15px]'>
              <h3 className='pr-[15px] border-r-[3px] border-white font-extrabold'>2024-06-24</h3>
              <h3 className='font-semibold'>Konteks</h3>
            </div>
            <h3 className='font-medium'>Lorenim ipsum Lorenim ipsumLorenim ipsumLorenim ipsumLorenim ipsum</h3>
          </div>
        </div>

        <Button type={"glowing"} className={"mt-auto"}>
          <p className='font-gothic text-[24px] font-semibold text-white'>View All</p>
        </Button>
      </section>
    </section>
  )
}

export default ProductRelease