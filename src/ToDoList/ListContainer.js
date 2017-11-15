import React, {Component} from 'react'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

class ListContainer extends Component {
  state = {
    toDos: undefined,
    toDoItem: undefined,
    itemDueDate: undefined
  }

  componentDidMount () {
    const toDoArray = [{title: 'Finish coding homework', dueDate: '11/13/17', complete: false}, {title: 'Finish Laundry', dueDate: '11/14/17', complete: false}]
    this.setState({ toDos: toDoArray})
  }

  handleToDoItemChange = (e) => {
    this.setState({toDoItem: e.target.value})
  }

  handleDueDateChange = (e) => {
    this.setState({itemDueDate: e.target.value})
  }

  addToList = (e) => {
    e.preventDefault()
    const newToDo = { title: this.state.toDoItem, dueDate: this.state.itemDueDate}
    const newToDoList = this.state.toDos
    
    newToDoList.push(newToDo)
    this.setState({ toDos: newToDoList})
  }

  

 
  render () {
    return (
      <div>

        <ToDoForm
          handleToDoItemChange={this.handleToDoItemChange}
          handleDueDateChange={this.handleDueDateChange}
          addToList={this.addToList}

        />
        {
          this.state.toDos
            ? <ToDoList toDos={this.state.toDos} />
            : <h1>No toDos Yet</h1>
        }
      </div>
    )
  }
}

export default ListContainer
