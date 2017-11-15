import React from 'react'
import PropTypes from 'prop-types'

const GiftList = ({ gifts }) =>
  <div>
    {
      gifts.map(item => {
        return (
          <div>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
          </div>
        )
      })
    }
  </div>

GiftList.propTypes = {
  gifts: PropTypes.array.isRequired
}

export default GiftList
