import React, { useState } from 'react'

const RollDice = ({currentDice,rollDice,reset}) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center mt-13 gap-3 '>
      <img onClick={rollDice} className='size-50 cursor-pointer' src={`/images/DiceImages/dice_${currentDice}.png`} alt="" />
      <h1 className='font-bold'>Click on the Dice to roll</h1>
      <button onClick={reset} className='border-black border-2 rounded px-12 py-1 hover:bg-black hover:text-white'>Reset Score</button>
      <button onClick={()=>setShowRules(!showRules)} className='border-black border-2 bg-black text-white rounded px-12 py-1 hover:bg-white hover:text-black'>Show Rules</button>
      {showRules&&(<div className='bg-[#F5F3FF] p-4 px-5 pb-3 rounded lg:px-5 lg:pb-2'>
        <h1 className='font-bold'>How to play dice game</h1>
        <p className='mt-2'>1.Select any number.</p>
        <p>2.Click on dice image.</p>
        <p>3.after click on dice if selected number is equal to dice number you will get same point as dice.</p>
        <p>4.if you get wrong guess then 2 points will be deducted.</p>
      </div>)}
    </div>
  )
}

export default RollDice
