import React from 'react'

const headerStyle = {
  container: {
    background: '#FABE58',
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    width: '80vw'
  },

  h3: {
    fontFamily: 'Oswald',
    fontSize: '30px',
    color: '#fff'
  }
}

const Header = () => {
  return (
    <div style={headerStyle.container}>
      <h3 style={headerStyle.h3}>ToDo List App</h3>
    </div>
  )
}

export default Header
