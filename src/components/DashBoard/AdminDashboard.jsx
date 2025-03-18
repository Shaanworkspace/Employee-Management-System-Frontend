import React from 'react'
import Header from '../others/Header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'

function AdminDashboard() {
    return (
        <div className='bg-[#1c1c1c] flex w-full flex-col items-center justify-center'>
            <div className=' w-full '>
                <Header  />
            </div>
            <div className='pt-5'>
                    <CreateTask  />
                </div>
            <div className='w-[95%]'>
                    <AllTask />
            </div>
        </div>
    )
}

export default AdminDashboard