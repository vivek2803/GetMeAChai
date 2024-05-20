import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-950 text-white flex justify-center items-center flex-col gap-1 px-10 h-16'> 
        <div className='text-sm md:text-base'>Copywrite &copy; {currentYear} Get Me A Chai | All rights reserved!</div>
        <div className='text-xs md:text-sm text-gray-500'>Made By Naman Khandelwal with ❤</div>
    </footer>
  )
}

export default Footer