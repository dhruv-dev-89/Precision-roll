import React from 'react'

const StartGame = ({toggle}) => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center  gap-1.25 h-screen  mx-auto min-h-screen bg-cover bg-center' style={{
    backgroundImage: ` url('/background.jpg')`
  }}>
        <div className='w-75 md:w-125 lg:w-162.25'>
            <img src="\images\diceimagemain.png" alt="" className='w-full'/>
        </div>
        <div className='flex flex-col justify-center items-center lg:items-start'>
            <h1 className='font-bold text-5xl md:text-7xl lg:text-[96px]'>DICE GAME</h1>
            <button onClick={toggle} className='border-black border-2 lg:self-end rounded text-white bg-black px-10 py-1 hover:bg-white hover:text-black transition-colors duration-300 ease-in'>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame