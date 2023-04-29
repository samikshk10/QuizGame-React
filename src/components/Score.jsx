import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Score({score,questionlength,difficulty,category}) {
  const navigate = useNavigate();

  const startgame = () => {
    navigate('/quizgame',
        {
            state: {
                difficulty: difficulty,
                category: category
            }
            
        });

        window.location.reload();
}


  return (
    <div className='result'>
      <div className='score-container'>
    <span>
       
    Your Score is : {score || 0}/{questionlength || 10}
</span>
 <button onClick={()=>startgame()} className='btn btn-tryagain'>Try Again</button> 
      </div>
    </div>
  )
}
