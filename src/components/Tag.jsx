import React from 'react'
import './Tag.css'

const Tag = (props) => {
  const {selectTag , selected} = props;
  const tagStyle = {
    Office: { backgroundColor: "#fda821" },
    Personal: { backgroundColor: "#15d4c8" },
    Learning: { backgroundColor: "#ffd12c" },
    Home: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };

  return (
    <button type='button' className="tags" style={selected? tagStyle[props.children]:tagStyle["default"]} onClick={()=> selectTag(props.children)}>{props.children} </button>
  )
}

export default Tag