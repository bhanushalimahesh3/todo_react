import React, {Component} from 'react';
import TodoListItems from './TodoListItems';

class TodoList extends Component 
{
	constructor(props) {
		super(props);
	}

	render() {

		const Items = (this.props.todoList.length > 0) ? this.props.todoList.map( (todo, i) => {
		    
		     return (<TodoListItems key={todo.id} todo={todo} handleUpdateForm={this.props.handleUpdateForm} handleDelete={this.props.handleDelete}/>)
		    }) : <Loading />;
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
			    	{Items}
			   </tbody>
			  </table>
			  );
	}
}

function Loading() {
	return (<tr><td>Loading...</td></tr>)
}



export default TodoList;

