import React from 'react'


const AllTask = () => {
    return (
        <div className='h-60 w-full flex flex-col justify-center items-start '>
            <div className='flex-shrink-0  h-10 w-full text-black text-lg   flex justify-center bg-blue-200  items-center'>
                <h1 className='w-1/7  justify-center flex '>Employee Name</h1>
                <h1 className='w-1/7  justify-center flex '>New Task</h1>
                <h1 className='w-1/7  justify-center flex '>Accepted</h1>
                <h1 className='w-1/7  justify-center flex '>Complete</h1>
                <h1 className='w-1/7  justify-center flex '>Failed</h1>
                <h1 className='w-1/7  justify-center flex '>Avoided</h1>
                <h1 className='w-1/7  justify-center flex '>Coding</h1>
            </div>

            <div id="Tasklist" className='flex-nowrap overflow-y-auto h-35 w-full mt-2 flex flex-col items-center justify-center bg-[#313131] '>
                {/* {Authdata.employees.map((ele,idx) => {
                    return <div key={idx} className='flex-shrink-0 text-xl h-10 mb-3 w-full text-white flex justify-center bg-pink-800 rounded-lg items-center'>
                        <h1 className='w-1/7  justify-center flex '>{ele.firstName}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.newTaskCount}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.acceptedTaskCount}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.completedTaskCount}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.failedTaskCount}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.avoidedTaskCount}</h1>
                        <h1 className='w-1/7  justify-center flex '>{ele.taskCounter.codingTaskCount}</h1>
                    </div>
                })
                } */}
            </div>
        </div>
    )
}

export default AllTask