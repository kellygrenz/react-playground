import React from 'react'

const headerStyle = {
  container: {
    
    
    justifyContent: 'space-between',
 
    alignItems: 'center',
    
  },

  h1: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Permanent Marker', 
    fontSize: '50px'
  }
}
const Header = () => 
  <div style={headerStyle.container}>
    <h1 style={headerStyle.h1}>Get To Work!</h1>
    
  </div>



export default Header