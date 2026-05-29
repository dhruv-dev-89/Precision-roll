import React, { useState } from 'react'

const NumberSelector = ({selectedNumber,setSelectedNumber,error,setError}) => {
    const arrNumber=[1,2,3,4,5,6];
    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }

  return (
    <div className='mt-3.5'>
        <div className='text-right text-[18px] text-[#B45309] font-bold'>{error}</div>
        <div className='flex flex-col gap-3'>
            <div className='grid grid-cols-2 gap-4  lg:flex'>
                {arrNumber.map((value,i)=>(
                    <Box key={i}
                    isSelected={value === selectedNumber}
                    onClick={()=>numberSelectorHandler(value)}
                    >{value}</Box>
                ))}
            </div>
            <div className='self-end '>
                <h2 className='font-bold text-2xl'>Select Number</h2>
            </div>
        </div>
    </div>
  )
}

export default NumberSelector

const Box=({children,isSelected,onClick})=>{
    return(
    <div onClick={onClick} className={`flex justify-center items-center border-black border-2 size-18 text-[24px] font-bold
     ${isSelected ? 'bg-black text-white' : 'bg-white text-black'}
            `}>{children}</div>
    )
}