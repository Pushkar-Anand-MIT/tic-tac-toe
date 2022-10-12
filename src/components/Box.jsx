import React from 'react'
import "./Box.css"

export const Box = ({value, onCLick}) => {
    const style = value==="X" ? "box x" : "box o";
  return (
    <button className={style} onClick={onCLick}>{value}</button>
  )
}
