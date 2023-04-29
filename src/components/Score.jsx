import React from 'react'

export default function Score({score,questionlength}) {
  return (
    <div className='result'>
      <div className='score-container'>
    <span>
        
    Your Score is : {score || 0}/{questionlength || 10}


</span>
<a href='/quizgame'><button className="btn btn-tryagain">Try Again!!!</button></a>

      </div>
    </div>
  )
}
