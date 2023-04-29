import React, { useState } from 'react';
import "../assets/css/quizgame.css";
import { useNavigate } from 'react-router-dom';
import Startbutton from './Startbutton';

export default function Choosegame() {
    const[category,setcategory]=useState(12);
    const[difficulty,setdifficulty]=useState("easy");
    const navigate = useNavigate();
    const startgame = () => {
        navigate('/quizgame',
            {
                state: {
                    difficulty: difficulty,
                    category: category
                }
            });
    }

  return (
    <>
    <div className='choosegame'>
        <div className='choose2'>
            <h3>Choose a category</h3>
                  <div className='choose choosegame__category '>
                <button onClick={()=>setcategory(12)} className={`category ${category===12 && "choosegame__selected"}`}>
                    Music
                </button>

                <button  className={`category ${category===21 && "choosegame__selected"}`} onClick={()=>setcategory(21)}>
                    Sports
                </button>
        </div>
        </div>

            <div className='choose2'>
        <h3> Choose a Difficulty</h3>
        <div className='choose choosegame__difficulty'>
               <button className={`category ${difficulty==="easy" && "choosegame__selected"}`} onClick={()=>setdifficulty("easy")}>
                    Easy
               </button>
               <button className={`category ${difficulty==="medium" && "choosegame__selected"}`} onClick={()=>setdifficulty("medium")}>
                    Medium
               </button>
        </div>
            </div>
          
</div>
<Startbutton handleClick={()=>startgame()} label={"Start Game"}/>

</>

  )
}
