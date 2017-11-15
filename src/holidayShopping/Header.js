import React from 'react'

const headerStyle = {
  container: {
    border: '3px solid yellow',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
const Header = () => 
  <div style={headerStyle.container}>
    <h3>My Holiday Shopping List</h3>
    <p>Helping keep track of my gifts</p>
  </div>



export default Header
