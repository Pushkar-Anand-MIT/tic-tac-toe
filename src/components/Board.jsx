import React from 'react'
import {Box} from './Box'
import './Board.css'

export const Board = ({board, onCLick}) => {
  return (
    <div className='board'>
        {board.map((value,idx )=>{
            return <Box value={value} onCLick={()=> value=== null && onCLick(idx)}/>
        })} </div>
  )
}
