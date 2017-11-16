import React from 'react'
import ToDo from './ToDo'
import PropTypes from 'prop-types'

const listStyle = {
  container: {
    display: 'flex',
    background: '#22313F',
    padding: '40px',
    width: '50%',
    alignItems: 'center',
    flexDirection: 'column'
  },

  h2: {
    color: '#fff', 
    fontFamily: 'Oswald'
  }
}

const ToDoList = ({toDos, title, markComplete}) => {
  return (
    <div style={listStyle.container}>
      <h2 style={listStyle.h2}>{title}</h2>
      {
        ToDoList.length > 0
          ? toDos.map(toDo => {
            return <ToDo
              title={toDo.title}
              dueDate={toDo.dueDate}
              complete={toDo.complete}
              id={toDo.id}
              markComplete={markComplete}
            />
          })
          : 'No ToDos'
      }
    </div>
  )
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default ToDoList
