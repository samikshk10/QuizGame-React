import React from 'react'

export default function Questions({questions}) {
  return (
    <div className='quizgame__questions'>
    {questions || ""}
    </div>
  )
}
