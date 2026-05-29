import React from 'react'

const TotalScore = ({score}) => {
  return (
    <div className='mt-21 lg:max-w-50 lg:text-center lg:mt-2 '>
        <h1 className='text-[80px] leading-25 font-bold'>{score}</h1>
        <p className='text-[24px] font-medium'>Total Score</p>
    </div>
  )
}

export default TotalScore

