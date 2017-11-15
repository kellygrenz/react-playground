import React from 'react'
import PropTypes from 'prop-types'

const giftFormStyle = {
  container: {
    backgroundColor: 'green',
    padding: '50px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-around'
  },

  searchArea: {
    marginBottom: '20px',
    marginRight: '15px',
    display: 'flex' 
  },
  
  input: {
    padding: '10px',
    borderRadius: '5px',
    fontSize: '15px'

  }

}

const GiftForm = ({ handleNameOfGiftChange, handlePriceChange, addToList }) => {
  return (
    <div style={giftFormStyle.container}>
      <div style={giftFormStyle.searchArea}>
        <label>Name</label>
        <input placeholder='gift name here' onChange={ handleNameOfGiftChange } style={giftFormStyle.input} />
      </div>

      <div style={giftFormStyle.searchArea}>
        <label>Price</label>
        <input placeholder='0.00' onChange={ handlePriceChange } style={giftFormStyle.input} />

      </div>

      <div style={giftFormStyle.searchArea}>
        <button type='button' onClick={ addToList }>Update List</button>
      </div>
    </div>
  )
}

GiftForm.propTypes = {
  handleNameOfGiftChange: PropTypes.func.isRequired,
  handlePriceChange: PropTypes.func.isRequired,
  addToList: PropTypes.func.isRequired
}

export default GiftForm
