import React from 'react'
import { Button } from '../Button'

const Footer = () => {
  return (
    <section className='bg-black flex justify-between pl-[120px] pr-[170px] text-white py-[30px]'>
      <div className='flex flex-col gap-[17px]'>
        <img src='./svg/leoneed_logo.svg' className='h-[88px] w-[206px]' alt='logo' />

        <div className='flex gap-[26px] items-center'>
          <p>Follow us</p>
          <img src='./svg/fontisto_youtube-play.svg' className='h-[20px] w-[28px]' alt='logo' />
        </div>
      </div>

      <div className='flex gap-[25px]'>
        <div className='flex gap-[80px] font-gothic font-medium text-[20px]'>
          <div className='flex flex-col gap-[15px]'>
            <p className='pr-6'>About</p>
            <p className='pr-6'>Release</p>
            <p className='pr-6'>Information</p>
            <p className='pr-6'>Recruit</p>
          </div>

          <div className='flex flex-col gap-[15px]'>
            <p className='pr-6 text-[#BDBDBD] text-[18px]'>Artist</p>
            <p className='pr-6'>Hoshino Ichika</p>
            <p className='pr-6'>Tenma Saki</p>
            <p className='pr-6'>Mochizuki Honami</p>
            <p className='pr-6'>Hinomori Shiho</p>
          </div>
        </div>

        <Button className={'border-[2px] border-white rounded-[10px]'}>
          <img src='./svg/fa_paper-plane.svg' alt='fa_paper-plane' width={26} height={26} />
          <h1 className='pr-6'>Contact</h1>
        </Button>
      </div>
    </section>
  )
}

export default Footer