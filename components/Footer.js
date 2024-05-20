import React from 'react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-950 text-white flex justify-center py-3 md:items-center flex-col gap-5 px-3 md:px-10 '> 
    <div className='flex justify-center items-center flex-col gap-1'>

        <div className='text-sm md:text-base'>Copywrite &copy; {currentYear} Get Me A Chai | All rights reserved!</div>
        <div className='text-xs md:text-sm text-gray-500'>Made By Naman Khandelwal with ❤</div>
    </div>
    <div className='links flex text-left flex-col md:flex-row gap-5 '>
       
      {/* links for About Us, Contact Us, Privacy Policy, Terms & Conditions, Cancellation/Refund Policies. */}
      
      <Link href='/about' className='text-sm md:text-base'>About Us</Link>
      <Link href='/contact' className='text-sm md:text-base'>Contact Us</Link>
      <Link href='/privacy-policy' className='text-sm md:text-base'>Privacy Policy</Link>
      <Link href='/terms&conditions' className='text-sm md:text-base'>Terms & Conditions</Link>
      <Link href='/cancellation&refund' className='text-sm md:text-base'>Cancellation/Refund Policies</Link>
    </div>
    </footer>
  )
}

export default Footer