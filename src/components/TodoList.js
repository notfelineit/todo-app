import React from 'react'
import ListItem from './ListItem'

export default (props) => {
	let items = props.tasks
      .sort((prev, curr) => {
        if (prev.done === curr.done) {
          return 0
        } else if (prev.done) {
          return 1
        } else {
          return -1
        }
      })
      .map((task, index) => {
        return <ListItem delete={props.delete} key={task.id} index={task.id} onChange={props.update} task={task} />
      })
	return (
		<div className='Todo-List'>
        <ul>
          {items}
        </ul>
      </div>
	)
}