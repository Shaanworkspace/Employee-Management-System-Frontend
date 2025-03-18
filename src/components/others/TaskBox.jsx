import React from 'react'
import TaskNumberRepresenter from './TaskNumberRepresenter.jsx'

function TaskBox() {
	return (
		<div className='flex flex-col  w-[95%] gap-3 items-center justify-center mt-1'>
				<div className='flex gap-3'>
					<TaskNumberRepresenter  />
				</div>
		</div>
	)
}

export default TaskBox