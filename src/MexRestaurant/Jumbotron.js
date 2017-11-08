import React from 'react'
import PropTypes from 'prop-types'

const Jumbotron = ({title, subTitle}) => {
  return (
    <div className='jumbotron'>
      <h1> { title } </h1>
      <h2> { subTitle } </h2>
    </div>
  )
}

Jumbotron.propTypes = {
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Jumbotron
