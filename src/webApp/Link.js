import React from 'react'
import PropTypes from 'prop-types'

const Link = ({name, icon}) => {
  return (
    <div className='link'>
      <a className={`fa fa-${icon}`}> {name} </a>
    </div>
  )
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Link
