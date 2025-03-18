import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
        <div  className=' text-white mb-2 h-92 w-[300px] p-5  bg-pink-400 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between text-md items-center'>
                <h3 className='bg-red-600 px-3 py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>{data.taskDescription}</p>
            <div className='flex justify-between mt-4 gap-2.5'>
                <button className='bg-green-600 py-1 px-2 text-sm'>Mark As Completed</button>
                <button className='bg-red-600 py-1 px-2 text-sm'>Mark As Failed</button>
            </div>
        </div>
    </div>
  )
}

export default AcceptTask