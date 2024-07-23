import React from 'react'

const LandingImage = () => {
  return (
    <section className='w-screen h-screen relative pb-[53px] flex px-[95px]'>
      <img src='./png/Ichika_The_Beginning_o_Something_New.png' className='w-full h-full absolute left-0 top-0 -z-[30]' alt='ichika' />

      <div className='flex flex-col gap-[25px] mt-auto'>
        <div className='text-[100px] text-white leading-none font-josefin font-semibold italic' style={{ textShadow: '5px 4px 4px rgba(0, 0, 0, 0.5)' }}>
          <h1>We Create</h1>
          <h1>the Future Artist</h1>
        </div>
        <p className='text-[30px] text-white font-gothic font-semibold'>We will produce the next generation of virtual artists, including VSinger.</p>
      </div>

      <div className='w-full h-[50%] absolute -z-[25] left-0 -bottom-24 -skew-y-6 bg-gradient-to-b from-[#1845CC]/0 to-[#1845CC] from-0% to-50%' />
    </section>
  )
}

export default LandingImage