import React from 'react'

const NewTask = () => {
    return (
    <div>
        <div  className=' text-white mb-2 h-92 w-[300px] p-5  bg-emerald-800 rounded-xl flex-shrink-0 '>
            <div className='flex justify-between text-md items-center'>
                <h3 className='bg-pink-600 px-3 py-1'>category</h3>
                <h4 className='text-sm'>taskDate</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold '>taskTitle</h2>
            <p className='text-sm mt-4'>taskDescription</p>
            <div className='flex justify-between w-[90%]  mt-4 gap-2.5'>
                <button className='bg-green-600 py-1 px-2 text-sm w-full rounded-lg'>Accept Task</button>
            </div>
        </div>
    </div>
    )
}

export default NewTask