import React from 'react'

const Contact = () => {
  return (
    <section className='w-full h-[500px] relative py-[80px] px-[160px] font-medium text-white'>
      <h1 className='font-josefin text-[96px]'>Contact Us</h1>
      <h3 className='font-gothic text-[25px]'>For collaboration, job requests, or questions about artists, please contact us here.</h3>
      <img className='w-full h-full object-cover absolute brightness-[0.80] object-top top-0 left-0 -z-[1]' src='./png/contact_us_bg.png' alt='contact_us' />
    </section>
  )
}

export default Contact