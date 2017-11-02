import React from 'react'
import PropTypes from 'prop-types'

const MonsterCard = ({ monster }) => {
  return (
    <div className='monsterCard'>
      <h1>{ monster.name }</h1>
      {
        monster.diet.map((food) => {
          return <p>{ food } </p>
        })
      }
      <img src={monster.img} />
    </div>
  )
}

MonsterCard.propTypes = {
  monster: PropTypes.object.isRequired
}

export default MonsterCard