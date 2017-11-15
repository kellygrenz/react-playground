import React from 'react'
import PropTypes from 'prop-types'

const listStyle = {
  list: {
    padding: '30px'
  },

  listItem: {
    padding: '40px',
    backgroundColor: '#E4F1FE'
  },

  h3: {
    color: '#C0392B',
    fontFamily: 'Shadows Into Light', 
    fontSize: '36px'
  }, 

  h4: {
    color: '#333',
    fontFamily: 'Oswald',
    fontSize: '25px'
  },

  label: {
    color: '#F2784B',
    fontFamily: 'Oswald',
    fontSize: '20px',
    marginRight: '10px'
  }
}

const ToDoList = ({ toDos }) =>
  <div>
    {
      toDos.map(item => {
        return (
          <div style={listStyle.list}>
            <div style={listStyle.listItem}>
              <h3 style={listStyle.h3}>Need To: {item.title}</h3>
              <h4 style={listStyle.h4}>Due Date: {item.dueDate}</h4>
              <div className='completeStyle'>
                <label style={listStyle.label}>Mark as Complete</label>
                <input type='checkbox' />
              </div>
            </div>
          </div>
        )
      })
    }
  </div>

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
  removeFromList: PropTypes.func.isRequired
}

export default ToDoList
