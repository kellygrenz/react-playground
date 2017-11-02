import React from 'react'
import PropTypes from 'prop-types'
import MonsterCard from './MonsterCard'

const MonsterSection = ({ arr }) => {
  return (
    <div className='myMain'>
      {
        arr.filter((monster) => {
          return monster.name[0] === 'A'
        }).map((monster) => {
          return <MonsterCard monster={monster} />
        })
        /* arr.map((monster) => {
          return <MonsterCard monster={monster} />
        }) */
      }
    </div>
  )
}

MonsterSection.propTypes = {
  arr: PropTypes.array.isRequired

}

export default MonsterSection