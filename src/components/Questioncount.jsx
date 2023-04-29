import React from 'react'

export default function Questioncount({current,total}) {
  return (
    <div className='quizgame__question-count'>
            
    <span>Question: {current || 0}</span>/{total ||10}
 </div>
  )
}
