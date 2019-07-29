import React, {Component} from 'react';

let TableBody = function(props) {
	if(props.todoList.length > 0){
		return (
				<React.Fragment>
				{props.todoList.map(todo => (
						<tr key={todo.id}>
							<td>{todo.id}</td>
							<td>{todo.name}</td>
							<td><button type="button" onClick={(e) => props.handleDelete(todo.id)}>Delete</button> <button type="button" >Edit</button></td>
						</tr>
						)
					)
				}
				</React.Fragment>
				);
	}else{
		return (
				<React.Fragment>
					<tr>
						<td colsSpan="3">Loading...</td>
					</tr>
				</React.Fragment>
				);
	}				
}

class TodoList extends Component 
{
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props);
		return (
			<table className="table">
			    <thead>
			      <tr>
			        <th>Id</th>
			        <th>Todo</th>
			        <th>Action</th>
			      </tr>
			    </thead>
			    <tbody>
			    	<TableBody todoList={this.props.todoList} handleDelete={this.props.handleDelete}/> 
			   </tbody>
			  </table>
			  );
	}
}



export default TodoList;

