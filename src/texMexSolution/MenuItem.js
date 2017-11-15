import React from 'react'
import PropTypes from 'prop-types'

const MenuItemStyle = {
  container: {
  border: '4px solid red',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  }, 
  header: {
    border: '2px solid blue',
    display: 'flex'
  },
  img: {
    maxWidth: '200px',
    marginBottom: '30px'
  }
}

const MenuItemDisplay = ({name, price, category, spiceLevel, img}) => {
  return (
    <div style={MenuItemStyle.container}>
      <h4 style={MenuItemStyle.header}>{name} ${price}</h4>

      <h4>{category}</h4>
      <h4>{spiceLevel}</h4>
      <img style={MenuItemStyle.img} src={img} />

    </div>
  )
}

MenuItemDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  spiceLevel: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired

}

export default MenuItemDisplay
