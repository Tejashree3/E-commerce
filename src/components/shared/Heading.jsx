import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <div className='mb-10 text-center max-w-[600px] mx-auto space-y-2'>
        <h1 className='text-4xl font-bold lg:text-4xl'>{title}</h1>
        <p className='text-sm text-gray-400'>{subtitle}</p>

    </div>
  )
}

export default Heading