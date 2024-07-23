import React from 'react'
import { Button } from '../Button'

const Header = () => {
  return (
    <div className='h-[77px] w-full pl-[64px] pr-[100px] flex justify-between fixed top-0 bg-[#2F2F2F]/[0.47] z-50'>
      <img src='./svg/leoneed_logo.svg' className='h-full w-fit' alt='logo' />

      <div className='text-white text-[20px] flex gap-[100px] items-center'>
        <div className='flex gap-[50px] items-center font-gothic font-medium'>
          <h1>About</h1>
          <h1>Release</h1>
          <h1>Information</h1>
        </div>

        <div className='flex gap-[50px] items-center'>
          <Button className={'border-[2px] border-white rounded-[10px] font-gothic font-semibold'}>
            <img src='./svg/fa_paper-plane.svg' alt='fa_paper-plane' width={26} height={26} />
            <h1 className='pr-6'>Contact</h1>
          </Button>

          <div className='flex flex-col gap-[13px]'>
            <div className='w-[38px] h-[3px] bg-white' />
            <div className='w-[38px] h-[3px] bg-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header