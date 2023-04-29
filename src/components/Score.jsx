import React from 'react'

export default function Score({score,questionlength}) {

  return (
    <div className='result'>
      <div className='score-container'>
    <span>
       
    Your Score is : {score || 0}/{questionlength || 10}
</span>
<button onClick={()=>window.location.reload()} className='btn btn-tryagain'>Try Again</button>
      </div>
    </div>
  )
}
