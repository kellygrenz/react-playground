import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  link: {
    color: '#fff',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
    textDecoration: 'none'

  }
  
}

const NavigationBar = () => {
  return (
    <nav className='nav'>

      <Link style={styles.link} to='/'>Home</Link>
      <Link style={styles.link} to='/about'>About</Link>
      <Link style={styles.link} to='/services'>Services</Link>
      <Link style={styles.link} to='/products'>Products</Link>
      <Link style={styles.link} to='/contact'>Contact</Link>

    </nav>
  )
}

export default NavigationBar
