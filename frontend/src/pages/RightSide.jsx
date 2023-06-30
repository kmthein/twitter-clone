import React from 'react'
import { BiSearch } from 'react-icons/bi'; 
import Trends from './Trends';

const RightSide = () => {
  return (
    <div className=' rightside text-sm pl-4 w-[30%]'>
        <div className=' w-[350px] pt-2'>
            <button className=' bg-black/10 rounded-full w-full flex items-center text-left pl-2 py-2 text-gray-500'><BiSearch className=' inline-block mr-1'/>Search Twitter</button>
            <Trends />
        </div>
    </div>
  )
}

export default RightSide