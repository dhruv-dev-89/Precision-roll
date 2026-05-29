import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RoleDice'
import { useState } from 'react'

const GamePlay = () => {
  const [score,setScore]=useState(0);
  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");

  const generateRandomNumber=(min, max)=>{
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number");
      return;
    }
    

    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);

    if(selectedNumber===randomNumber){
      setScore(prev=>prev+randomNumber);
    }
    else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined);
  }

  const reset=()=>{
    setScore(prev=>0);
  }
  
  return (
    <div className='min-h-screen bg-cover bg-center' style={{
    backgroundImage: ` url('/background.jpg')`
  }}>
        <div className='flex justify-around '>
          <TotalScore score={score}/>
          <NumberSelector selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
        </div>
        <div>
          <RollDice currentDice={currentDice} rollDice={rollDice} reset={reset}/>
        </div>

    </div>
  )
}

export default GamePlay