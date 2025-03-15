import React from 'react'
import { useRef } from 'react'

const OrderButton = () => {
    let orderButtonRef=useRef(null);
    function mouseOverAnimation(){
        orderButtonRef.current.style.height='12rem';
        orderButtonRef.current.style.width='12rem';
        orderButtonRef.current.style.borderRadius='6rem';
    }

    function mouseLeaveAnimation(){
        orderButtonRef.current.style.height='10rem';
        orderButtonRef.current.style.width='10rem';
    }
  return (
    <div className='h-[40rem] w-[40rem] max-md:h-[25rem] max-md:w-[25rem] max-sm:h-[18rem] max-sm:w-[18rem] bg-white rounded-full flex flex-col items-end justify-center pr-10 shadow-2xl gap-y-5 pl-12 max-sm:pl-8'>
            <p className='text-red-600 text-2xl max-md:text-lg max-sm:text-sm '>Start your Day with Coffee</p>
            <button ref={orderButtonRef} onMouseLeave={mouseLeaveAnimation} onMouseOver={mouseOverAnimation} className='self-start border-2 rounded-full w-40 h-40 max-sm:w-20 max-sm:h-20 duration-1000 max-sm:text-sm bg-red-600 border-none text-white'>Order Now</button>
    </div>
  )
}

export default OrderButton
