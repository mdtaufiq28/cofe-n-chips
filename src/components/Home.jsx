import React from 'react'
import NavigationMenu from './NavigationMenu'
import Form from './Form'
import OrderButton from './OrderButton'

const Home = () => {
  return (
    <>
    <NavigationMenu></NavigationMenu>
    <div className='grid grid-rows-[10rem,1fr] gap-y-10 items-center justify-center h-full p-6 pt-40'>
        <div className='flex flex-col gap-y-5 items-center'>
            <div className='text-gray-300 font-extrabold text-8xl max-md:text-5xl max-sm:text-4xl'>
                Cofe N' Chips
            </div>
            <div className='text-gray-300 font-bold text-xl max-sm:text-lg'>
                Caffeine in few minutes!
            </div>
        </div>

        <OrderButton></OrderButton>

    </div>
    </>
  )
}

export default Home
