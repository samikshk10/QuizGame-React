import React from 'react'

export default function Score({score,questionlength}) {
  return (
    <div className='result'>

    <span>
        
    Your Score is : {score || 0}/{questionlength || 10}

</span>
    </div>
  )
}
