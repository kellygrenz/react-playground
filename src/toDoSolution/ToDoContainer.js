import React, {Component} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

const style = {
  container: {
    display: 'flex'
  }
}

class ToDoContainer extends Component {
  state = {
    toDos: [],
    title: undefined,
    dueDate: undefined,
    completed: [],
    incomplete: []
  }

  componentDidMount = () => {
    const toDos = JSON.parse(localStorage.getItem('toDos'))
    console.log(toDos, 'local storage to dos')
    this.setState({toDos: toDos})
    setTimeout(() => {
      this.sortByCompleted()
    }, 3000)
  }

  addToDo = (e) => {
    e.preventDefault()
    const allToDos = this.state.toDos || []
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos
          ? this.state.toDos.length + 1
          : 1
      }
      allToDos.push(newToDo)
      this.setState({toDos: allToDos})
      localStorage.setItem('toDos', JSON.stringify(allToDos))
      alert('this item has been added to your list')
      this.setState({title: ''})
      this.setState({dueDate: ''})
      this.sortByCompleted()
    } else {
      alert('You must enter both title and due date')
    }
  }

  updateTitle = (e) => {
    this.setState({title: e.target.value})
  }

  updateDueDate = (e) => {
    this.setState({dueDate: e.target.value})
  }

  sortByCompleted = () => {
    console.log(this.state.toDos)
    const incomplete = this.state.toDos
      ? this.state.toDos.filter(item => !item.complete)
      : []
    const completed = this.state.toDos
      ? this.state.toDos.filter(item => item.complete)
      : []
    this.setState({completed: completed, incomplete: incomplete})
  }

  markComplete = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theToDo)
    theToDo.complete = !theToDo.complete
    this.sortByCompleted()
    console.log(theToDo)
  }

  resetToDos = () => {
    this.setState({ toDos: [], completed: [], incomplete: [] })
    localStorage.clear()
    
  }

  deleteToDo = (e) => {
    const theToDo = this.state.toDos.find(item => {
      return Number(e.target.id) === Number(item.id)
    })
    console.log(theToDo)
    const newArray = this.state.toDos.filter(item => {
      return item.id !== theToDo.id
    })
    console.log(newArray)
    this.setState({ toDos: newArray})
    this.sortByCompleted()
  }

  render () {
    return (
      <div>

        <ToDoForm
          addToDo={this.addToDo}
          title={this.state.title}
          dueDate={this.state.dueDate}
          updateTitle={this.updateTitle}
          updateDueDate={this.updateDueDate}
        />
        <button onClick={this.resetToDos} type='button'>Reset To Do List</button>
        <div >
          {
            this.state.toDos
              ? (
                <div style={style.container}>

                  <ToDoList toDos={this.state.incomplete} 
                    markComplete={this.markComplete} 
                    deleteToDo={this.deleteToDo} 
                    title='These Items are Incomplete' 
                  />

                  <ToDoList toDos={this.state.completed} 
                    markComplete={this.markComplete} 
                    deleteToDo={this.deleteToDo} 
                    title='These Items are Complete' 
                  />
                </div>
              )
              : '...Loading'
          }
        </div>
      </div>
    )
  }
}

export default ToDoContainer
