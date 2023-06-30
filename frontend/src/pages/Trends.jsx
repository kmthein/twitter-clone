import React from 'react'
import { AiOutlineSetting } from 'react-icons/ai';
import TrendsCard from '../components/TrendsCard';

const Trends = () => {
  return (
    <div className=' bg-gray-100 border-white mt-2 border-2 rounded-lg'>
        <div className=' bg-gray-100 mt-1 flex justify-between py-1 items-center px-2 border-b-2'>
            <h1 className=' font-bold'>Trends for you</h1>
            <AiOutlineSetting className=' text-sky-400 text-md' />
        </div>
        <TrendsCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq58SKaOZ8b8aEpb6vdsKzYXInnPhxFd_3A&usqp=CAU"} />
        <TrendsCard />
        <TrendsCard img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWq58SKaOZ8b8aEpb6vdsKzYXInnPhxFd_3A&usqp=CAU"} />
        <TrendsCard />
        <div className="bg-gray-100 pl-2 pt-1 pb-2 rounded-b-lg">
            <p className='text-sky-400 text-sm'>Show more</p>
        </div>
    </div>
  )
}

export default Trends