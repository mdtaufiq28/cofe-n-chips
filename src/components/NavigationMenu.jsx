import React from 'react'

const NavigationMenu = () => {
  return (
    <ul className="flex w-full justify-around text-xs py-3 max-sm:py-1 font-serif bg-white border-t border-b  border-red-600 shadow-xl fixed ">
        <li className='bg-white text-gray-500 px-4 rounded-full py-2 cursor-pointer hover:bg-gray-200 duration-1000'>Home</li>
        <li className='bg-white text-gray-500 px-4 rounded-full py-2 cursor-pointer hover:bg-gray-200 duration-1000 text-nowrap'>Cn'C Combos</li>
        <li className='bg-white text-gray-500 px-4 rounded-full py-2 cursor-pointer hover:bg-gray-200 duration-1000'>Account</li>
        <li className='bg-white text-gray-500 px-4 rounded-full py-2 cursor-pointer hover:bg-gray-200 duration-1000'>About Us</li>
    </ul>
  )
}

export default NavigationMenu
