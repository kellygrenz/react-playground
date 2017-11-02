import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import Jumbotron from './Jumbotron'
import MonsterSection from './MonsterSection'
import MonsterCard from './MonsterCard'

function Monster (name, diet, img) {
  this.name = name
  this.diet = diet
  this.img = img
}

const monsters = []

const jason = new Monster('Jason Voorhees', ['Monster Energy'], 'http://media.gettyimages.com/photos/actor-jason-sudeikis-attends-the-88th-annual-academy-awards-at-on-picture-id512934616?s=612x612')

// console.log(jason)

const ari = new Monster('A Boogie Monster', ['Blueberries'], 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO7_mac8gbjLij7gBxvPR1op59lMgCOIuKC_0yJfuAAb-AiTt43w')
const satch = new Monster('Satch Mo', ['Dog Food', 'squeekers'], 'https://i.pinimg.com/736x/19/fc/a7/19fca7e26e8dce8056e59cb7ca7acb2d--red-merle-australian-shepherd-aussie-shepherd.jpg')
const cruella = new Monster('Cruella', ['puppies', 'fur'], 'https://upload.wikimedia.org/wikipedia/en/3/33/Cruella_de_Vil_once_upon_a_time.png')
const trump = new Monster('Trump', ['Democrats'], 'https://www.gannett-cdn.com/-mm-/9f2c77c49ee5c8c5597ec74afecf329ec1d3fc20/r=540/https/media.gannett-cdn.com/29906170001/29906170001_5549278782001_5549264885001-vs.jpg')
const frankenstein = new Monster('Frankenstein', ['electricity'], 'https://interestingliterature.files.wordpress.com/2013/06/frankenstein.gif')

monsters.push(ari, satch, cruella, trump, frankenstein)

// console.log(monsters)



const MonsterApp = () => {
  return (
    <div>
      <Jumbotron title='Monster Mash' />
      <MonsterSection arr={monsters} />
    </div>
  )
}

MonsterApp.propTypes = {
  monster: PropTypes.object.isRequired
}

export default MonsterApp

