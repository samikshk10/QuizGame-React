import React from 'react'

export default function Category({category}) {
  return (
    <div className='quizgame__categorytitle'>Category: {category || "Music"}</div>

  )
}
