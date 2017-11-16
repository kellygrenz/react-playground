import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  formContainer: {
    backgroundColor: '#336E7B',
    padding: 40,
    paddingLeft: 40,
    width: '80vw'
  },

  fieldContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  field: {
    display: 'flex',
    flexDirection: 'column',
    width: '40%',
    marginBottom: '15px',
    
  },

  label: {
    textTransform: 'uppercase',
    color: '#fff',
    fontFamily: 'Oswald'
  },

  input: {
    padding: '15px',
    borderRadius: '5px'
  },

  button: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'center',
    padding: 15
  }
}

const ToDoForm = ({addToDo, title, dueDate, updateTitle, updateDueDate}) => {
  return (
    <form style={formStyle.formContainer}>
      <div style={formStyle.fieldContainer}>
        <div style={formStyle.field}>
          <label style={formStyle.label}>Title</label>
          <input type="text" value={title} onChange={updateTitle} style={formStyle.input}/>
        </div>

        <div style={formStyle.field}>
          <label style={formStyle.label}>Due Date</label>
          <input type="date" value={dueDate} onChange={updateDueDate} style={formStyle.input}/>
        </div>
      </div>
      <div style={formStyle.button}>
        <button onClick={addToDo}>Submit ToDo</button>
      </div>
    </form>
  )
}

ToDoForm.propTypes = {
  addToDo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
  updateDueDate: PropTypes.func.isRequired
}

export default ToDoForm
