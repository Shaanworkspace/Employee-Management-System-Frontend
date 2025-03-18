import React, { useState } from 'react'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [asignTo, setAsignTo] = useState("");
    const [category, setCategory] = useState("");

    const [newTask,setNewTask] = useState({});

    // // const submitHandeller = (e) => {
    // //     e.preventDefault();
    
    // //     // Create the new task object
    // //     const task = {
    // //         taskTitle,
    // //         taskDescription,
    // //         taskDate,
    // //         category,
    // //         active: false,
    // //         newTask: true,
    // //         failed: true,
    // //         completed: false
    // //     };
    
    // //     // Get employees from localStorage
    // //     const employees = JSON.parse(localStorage.getItem('employees')) || [];
    
    // //     // Check if assignTo matches any employee
    // //     const updatedEmployees = employees.map(emp => {
    // //         if (emp.firstName === asignTo) {
    // //             return { ...emp, tasks: [...emp.tasks, task] }; // Create a new object (immutability)
    // //         }
    // //         return emp;
    // //     });
    
    //     // Save updated data back to localStorage
    //     localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    
    //     console.log("Updated Employees:", updatedEmployees);
    // };

    return (
        <div className='text-white h-full flex flex-col justify-between items-center'>
            <form className='flex gap-26 justify-between'>
                <div>
                    <div className='ml-1 flex'>
                        <div className='h-10  w-10 rounded-full border-1 text-xl border-solid border-pink flex items-center justify-center'>
                            <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <p className='text-4xl pl-2 font-bold'>Create Task</p>
                    </div>
                    <div className='mt-3 '>
                        <h2 className='px-2 mb-1 text-lg text-stone-400'>Task Title</h2>
                        <input value={taskTitle} onChange={(e)=>{setTaskTitle(e.target.value)}} className="h-9 w-xl rounded-xl bg-[#313131] border-none placeholder:px-4 placeholder:text-sm" type="text" name="" id="" placeholder='Make a UI design' />
                    </div>

                    <div className='mt-3 '>
                        <h2 className='px-2 mb-1 text-lg text-stone-400'>Date</h2>
                        <input  value={taskDate}  onChange={(e)=>{setTaskDate(e.target.value)}}  className="h-9 px-5 text-sm text-stone-400 w-xl rounded-xl bg-[#313131] border-none " type="date" name="" id="" />
                    </div>
                    <div className='mt-3 '>
                        <h2 className='px-2 mb-1 text-lg text-stone-400'>Assign To</h2>
                        <input  value={asignTo}  onChange={(e)=>{setAsignTo(e.target.value)}}  className="h-9 w-xl rounded-xl bg-[#313131] border-none placeholder:px-4 placeholder:text-sm" type="text" name="" id="" placeholder='Enter the name to Assign' />
                    </div>
                    <div className='mt-3 '>
                        <h2 className='px-2 mb-1 text-lg text-stone-400'>Category</h2>
                        <input  value={category}  onChange={(e)=>{setCategory(e.target.value)}}  className="h-9 w-xl rounded-xl bg-[#313131] border-none placeholder:px-4 placeholder:text-sm" type="text" name="" id="" placeholder='Design, Development, etc...' />
                    </div>
                </div>

                <div className='pt-10'>
                    <div className='mt-3 '>
                        <h2 className='px-2 mb-1 text-lg text-stone-400'>Description</h2>
                        <textarea  value={taskDescription}  onChange={(e)=>{setTaskDescription(e.target.value)}}  className="h-54 w-xl rounded-xl bg-[#313131] border-none placeholder:px-4 placeholder:text-sm placeholder:pt-3" type="text" name="" id="" placeholder='Detailed description of task (Max. 500 Words)' />
                    </div>
                    <div className='mt-6 h-9 w-xl flex items-center justify-center'>
                        <button type="submit" className='h-9 w-sm bg-blue-400 rounded-2xl' >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateTask