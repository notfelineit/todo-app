import React from 'react'
export default class ListItem extends React.Component {
  constructor() {
    super()
  }
  update(e) {
    if (e.target.classList.contains('clicked')) {
      e.target.className = ''
    } else {
      e.target.className += 'clicked'
    }
  }
  render() {
    return (
      <li>
        <label htmlFor={this.props.task.id} className={this.props.task.done ? 'clicked' : ''}>
        </label>
        <input id={this.props.task.id} onChange={this.props.onChange} type='checkbox' value={this.props.task.done? 'on': 'off'}/>
        <div className='text'>
          <h1>{this.props.task.title}</h1>
          <h2>{this.props.task.timeSinceCreation}</h2>
        </div>
        <div onClick={this.props.delete} className={ this.props.task.done ? 'delete show' : 'delete' } id={this.props.task.id} />
      </li>
    )
  }
}