import React from 'react'
import PropTypes from 'prop-types'

const ToDo = ({title, dueDate, id, complete, markComplete}) => {
  return (
    <div>
      <h2>Need To: {title}</h2>
      <h4>Due Date: {dueDate}</h4>
      <button onClick={markComplete} id={id} type='button'>
        {
          complete
            ? 'Set as Incomplete'
            : 'Mark as Complete'
        }
      </button>
    </div>
  )
}

ToDo.PropTypes = {
  title: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  complete: PropTypes.string.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default ToDo
