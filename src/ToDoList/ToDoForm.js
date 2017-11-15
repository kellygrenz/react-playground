import React from 'react'
import PropTypes from 'prop-types'

const formStyle = {
  container: {
    backgroundColor: '#F2784B',
    padding: '50px',
    
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },



  searchArea: {
    marginBottom: '20px',
    marginRight: '15px',
    display: 'flex',
    width: '50%',
    flexDirection: 'column'
  
  },

  submit: {
    display: 'flex',
    alignItems: 'center',
    width: '500px',
    
    padding: '20px'
  },

  button: {
    display: 'flex',
    width: '150px',
    padding: '15px',
    backgroundColor: '#26C281',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '18px',
    borderRadius: '8px',
    fontFamily: 'Permanent Marker'
  },

  label: {
    fontFamily: 'Permanent Marker',
    color: '#fff'
  },

  input: {
    padding: '10px',
    borderRadius: '5px',
    fontSize: '15px'

  }

}

const ToDoForm = ({ handleToDoItemChange, handleDueDateChange, addToList }) => {
  return (
    <div style={formStyle.container}>
      <div style={formStyle.searchArea}>
        <label style={formStyle.label}>To Do</label>
        <input placeholder='What do You Need to Do?' onChange={handleToDoItemChange} style={formStyle.input} />
      </div>

      <div style={formStyle.searchArea}>
        <label style={formStyle.label}>Due Date</label>
        <input placeholder='dd/mm/yy' onChange={handleDueDateChange} style={formStyle.input} />

      </div>

      <div style={formStyle.submit}>
        <button type='button' onClick={addToList} style={formStyle.button}>Add to List</button>
      </div>
    </div>
  )
}

ToDoForm.propTypes = {
  handleToDoItemChange: PropTypes.func.isRequired,
  handleDueDateChange: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired
}

export default ToDoForm
