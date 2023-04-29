import React from 'react'

export default function Startbutton({handleClick,label}) {
  return (
    <div className='start__button'>
<button className='btn btn-start' onClick={handleClick}>{label ||"Start Quiz"}</button>

</div>
  )
}
