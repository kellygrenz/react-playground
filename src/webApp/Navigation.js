import React from 'react'
import Link from './Link'

const NavigationBar = () => {
  return (
    <nav className='nav'>

      <Link icon={'home'} name={' HOME'} />
      <Link icon={'info'} name={' ABOUT'} />
      <Link icon={'building-o'} name={' SERVICES'} />
      <Link icon={'phone'} name={' CONTACT'} />

    </nav>
  )
}

export default NavigationBar
