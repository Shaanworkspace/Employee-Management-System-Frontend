import React from 'react'
import Header from '../others/Header.jsx'
import TaskBox from '../others/TaskBox.jsx'
import TaskList from '../../TaskList/TaskList.jsx'

function EmployeeDashboard() {
    return (
        <div  className='bg-[#1c1c1c] w-screen h-screen'>
            <Header  /> 
            <div className='bg-[#1c1c1c] flex flex-col justify-center items-center'>              
                <TaskBox  />
                <TaskList  />
            </div>
        </div>
    )
}

export default EmployeeDashboard