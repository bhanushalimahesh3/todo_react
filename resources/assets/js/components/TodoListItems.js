import React, {Component} from 'react';

class TodoListItems extends React.Component
{
  constructor(props) {
    
    super(props);
    this.state = {
      isEditMode:false
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
   
  }
  
  handleEdit() {
    this.setState({isEditMode:true});
  }
  
  handleCancel() {
    this.setState({isEditMode:false});
  }
  
  handleSave() {

    this.props.handleUpdateForm(this.props.todo.id, this.refs.editInput.value);
    this.handleCancel();

  }
  
  render(){
   
    if(this.state.isEditMode){
       return (<tr>
      <td>{this.props.todo.id}</td>
      <td><input type="text" defaultValue={this.props.todo.name} ref="editInput"/></td>
      <td><button type="button" onClick={this.handleSave} >Save</button>  <button type="button" onClick={this.handleCancel}>Cancel</button></td>
      </tr>);
    }else{
      return (<tr>
      <td>{this.props.todo.id}</td>
      <td>{this.props.todo.name}</td>
 <td><button type="button" onClick={this.handleEdit} >Edit</button>  <button type="button" onClick={() => this.props.handleDelete(this.props.todo.id)}>Delete</button></td>
 </tr>);
    }
    
  }
}


export default TodoListItems;