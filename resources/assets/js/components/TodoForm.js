import React, {Component} from 'react';

class TodoForm extends Component
{
	constructor(prop) {
		super(prop);
	
		
	}

	render() {
		
		return (
			<form className="form-inline" onSubmit={this.props.handleSubmit}>
			  <div className="form-group">
			    <label>Todo:</label>
			    <input type="text" className="form-control" value={this.props.value} onChange={this.props.handleChange}/>
			  </div>			  
			  <button type="submit" className="btn btn-default">Submit</button>
			</form>
			);
	}
}

export default TodoForm;