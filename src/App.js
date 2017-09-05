import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'
import TodoForm from './components/TodoForm'
import ListItem from './components/ListItem'
import Pyro from './components/Pyro'
import TodoList from './components/TodoList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      idCount: 3,
      tasks: [
        {title: 'Learn JSX', done: false, created: moment(), id: 0, timeSinceCreation: moment().fromNow()},
        {title: 'Build an awesome app!', done: false, created: moment(), id: 1, timeSinceCreation: moment().fromNow()},
        {title: 'Ship it!', done: false, created: moment(), id:2, timeSinceCreation: moment().fromNow()}
      ],
      title: 'To-do List',
      pyro: false
    }
  }
  delete(e) {
    let newTasks = this.state.tasks.filter((task) => task.id != e.target.id)
    this.setState({tasks: newTasks})
  }
  update(e) {
    let newTasks = this.state.tasks.map((task, i) => {
      if (task.id === parseInt(e.target.id)) {
        task.done = !task.done
        if (task.done) {
          this.state.pyro = true;
          this.setState(this.state)
          window.setTimeout(() => {
            this.state.pyro = false;
            this.setState(this.state)
          }, 3000)
        }
        return task
      } else {
        return task
      }
    })
    this.setState(newTasks)
  }
  onKeyPress(e) {
    let code = e.keyCode? e.keyCode : e.which
    if (code == 13) {
      e.preventDefault()
      this.state.tasks.push({title: e.target.value, done: false, timeSinceCreation: moment().fromNow(), created: moment(), id: this.state.idCount})
      this.setState({tasks: this.state.tasks, idCount: this.state.idCount + 1})
      e.target.value = ''
    }
  }
  componentDidMount() {
    window.setInterval(() => {
      this.state.tasks.map((task) => {
        task.timeSinceCreation = task.created.fromNow()
      })
      this.setState({tasks: this.state.tasks})
    }, 60000)
  }
  numFinished(tasks) {
    return tasks.reduce((prev, current) => {
      return current.done ? prev+1 : prev
    }, 0)
  }
  render() {
    return (
      <div className="App">
        {this.state.pyro ? <Pyro /> : ''}
        <div className='Todo-App'>
          <h1>{this.state.title}</h1> 
          <span>{`${this.numFinished(this.state.tasks)}/${this.state.tasks.length}`}</span>
          <TodoForm placeholder='' onKeyPress={this.onKeyPress.bind(this)} />
          <TodoList tasks={this.state.tasks} delete={this.delete.bind(this)} update={this.update.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
