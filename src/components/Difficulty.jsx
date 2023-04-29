import React from 'react'

export default function Difficulty({difficulty}) {
  return (
    <div className='quizgame__difficulty'>Difficulty: {difficulty || "Easy"}</div>
    )
}
