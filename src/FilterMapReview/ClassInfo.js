import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    border: '3px solid pink',
    background: '#333',
    display: 'flex'
  }
}

const ClassInfo = ({item}) => {
  return (
    <div style={styles.container}>
      <h3>{item.name}</h3>
      <h3>{item.cost}</h3>
      <h3>{item.length}</h3>
    </div>
  )
}

ClassInfo.PropTypes = {
  item: PropTypes.object.isRequired
}

export default ClassInfo
