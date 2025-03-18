import React from 'react'
import AcceptTask from './AcceptTask.jsx'
import CompleteTask from './CompleteTask.jsx'
import Failedtask from './Failedtask.jsx'
import NewTask from './NewTask.jsx'

function TaskList() {
    return (
        <div id='Tasklist' className='flex-nowrap overflow-x-auto h-94 w-[95%] mt-4 flex justify-start items-center gap-5 '>
            {/* {data.tasks.map((element,id)=>{
                console.log(element)
                if(element.active){
                    return <AcceptTask key={id} data={element}/>
                }
                if(element.completed){
                    return <CompleteTask key={id} data={element}/>
                }
                if(element.failed){
                    return <Failedtask key={id} data={element}/>
                }
                if(element.newTask){
                    return <NewTask key={id } data={element}/>
                }
            })} */}
        </div>
    )
}

export default TaskList