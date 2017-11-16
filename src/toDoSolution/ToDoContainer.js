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
    const allToDos = this.state.toDos
    if (this.state.title && this.state.dueDate) {
      const newToDo = {
        title: this.state.title,
        dueDate: this.state.dueDate,
        complete: false,
        id: this.state.toDos.length + 1
      }
      allToDos.push(newToDo)
      this.setState({toDos: allToDos})
      this.sortByCompleted()
      localStorage.setItem('toDos', JSON.stringify(this.state.toDos))
      alert('this item has been added to your list')
      this.setState({title: ''})
      this.setState({dueDate: ''})
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
    const incomplete = this.state.toDos.filter(item => !item.complete)
    const completed = this.state.toDos.filter(item => item.complete)
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
        <div >
          {
            this.state.toDos
              ? (
                <div style={style.container}>
                  

                  <ToDoList toDos={this.state.incomplete} markComplete={this.markComplete} title='These Items are Incomplete' />
                      
                  <ToDoList toDos={this.state.completed} markComplete={this.markComplete} title='These Items are Complete'  />
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
