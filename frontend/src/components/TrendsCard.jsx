import React from 'react'

const TrendsCard = ({img}) => {
  return (
    <div className=' bg-gray-100 pl-2 pt-1 pb-2 border-b-2'>
        <h2 className='text-xs text-gray-500'>Trending worldwide</h2>
        <h2 className='text-xs font-semibold'>#BreakingNews</h2>
        {
            img ?
            <div className=' flex h-[70px] pr-2'>
            <div className=' text-[13px] p-1 border-2 rounded-s-lg'>
                <h4 className='text-gray-500'>Space</h4>
                <p>Lunar photography improves the discovery of the moon</p>
            </div>
            <img src={img} className='rounded-e-lg' alt="" />
        </div> :
            <p className='text-gray-500 text-xs py-1'>125K Tweets</p>

        }
        <p className='text-gray-500 text-xs'>10,094 people are Tweeting about this</p>
    </div>
  )
}

export default TrendsCard