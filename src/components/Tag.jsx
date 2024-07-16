import React from 'react'
import './Tag.css'

const Tag = (props) => {
  return (
    <button className="tags">{props.children} </button>
  )
}

export default Tag