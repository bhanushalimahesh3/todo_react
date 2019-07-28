import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import axios from 'axios';
const baseUrl = 'http://localhost/todo_react/public';

class Todo extends Component {

	constructor(prop) {
		super(prop);
		this.state = {value: '',
					  todoList:[]};

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.handleDelete = this.handleDelete.bind(this);
	}

	handleSubmit(event) {
	
	    event.preventDefault();
	    const todo = this.state.value;
	    this.addTodo(todo);
	}

	handleDelete(todoId) {

		this.deleteTodo(todoId);
	}

	handleChange(event) {
	  this.setState({value: event.target.value});
	}

	getTodoList() {
		const url = `${baseUrl}/todos`;
		axios.get(url).then(response => response.data)
		.then((data) => {
		  this.setState({ todoList: data.data })
		 })
	}

	addTodo(todo) {
		const url = `${baseUrl}/todos`;
		axios.post(url, {todo:todo}).then(response => response.data)
		.then((data) => {
			alert(data.message);
			if(data.status === 's') {
		  		this.setState({ value: '' });
		  		this.getTodoList();				
			}		  
		 })
	}

	deleteTodo(todoId) {
		const url = `${baseUrl}/todos/${todoId}`;
		axios.delete(url).then(response => response.data)
		.then((data) => {
			alert(data.message);
			if(data.status === 's') {
		  		this.setState({ value: '' });
		  		this.getTodoList();				
			}		  
		 })
	}

	componentDidMount() {
	    this.getTodoList();
	  }

	render(){
		return (
			<div className="mt-2">
				<div className="row">
					<div className="col-md-12">
						<h1 className="mb-2"> Todo application </h1>
						<TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={this.state.value}/>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-md-12">
						<TodoList todoList={this.state.todoList} handleDelete={this.handleDelete}/>						
					</div>
				</div>
			</div>		
			);
	}
}

ReactDOM.render(
  <Todo />,
  document.getElementById('app-root')
);