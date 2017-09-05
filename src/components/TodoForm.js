import React from 'react'

export default class TodoForm extends React.Component {
	componentDidMount() {
	    console.log(this.input)
	    this.input.focus()
	}
	render() {
		return (
			<form>
				<input ref={(input) => {this.input = input}} type='text' {...this.props} />
			</form>
		)
	}
}