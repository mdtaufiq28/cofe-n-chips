import React from 'react'

const Form = () => {
  return (
    <form className='border-2 p-12 mx-10 flex flex-col justify-center items-center shadow-2xl h-[30rem] w-[30rem] gap-y-4 bg-white rounded-full'>
    <div className='flex'>
        <input type="text" className=' max-h-full max-w-full outline-none p-4 border  border-gray-300 rounded-l-full' placeholder='Name' />
        <input type="text" className=' max-h-full max-w-full outline-none p-4 border border-gray-300 rounded-r-full' placeholder='Mobile Number'/>
    </div>

    <input type="text" className=' max-h-full max-w-full w-full outline-none p-4 border border-gray-300 rounded-full col-span-2' placeholder='Quantity of Coffee in Cups (Maximum 30 Cups)'/>
    <input type="text" className=' max-h-full max-w-full w-full outline-none p-4 border border-gray-300 rounded-full col-span-2' placeholder='Delivery Address'/>
    <input type="text" className=' max-h-full max-w-full w-full outline-none p-4 border border-gray-300 rounded-full  col-span-2' placeholder='Pincode'/>
    </form>
  )
}

export default Form
