
import React, {Component} from 'react'
import data from '../MexRestaurant/DATA'
import RestaurantInfo from './RestaurantInfo'
import MenuContainer from './MenuContainer'
import MenuList from './Menu'

// class PrintName extends Component {
//   state = {
//     name: undefined
//   }

//   handleNameChange = (e) => {
//     this.setState({name: e.target.value})
//   }

//   updateNameChange = (e) => {
//     alert('you are refreshing the page!')
//     e.preventDefault()
//     const updateName = this.state.name.filter(item => {
//       return item.name === this.state.name
//     })
//     console.log(updateNameChange)
//   }

//     return (
//         <div>
//           <input onChange={this.handleNameChange} />
//           <button type='button' onClick={this.updateNameChange}>Click to Say Hello</button>
//         <div>
//     )
// }

const TexMexApp = () =>

  <div>
    <RestaurantInfo
      name={data.company[0].title}
      address={data.address}
      phone={data.phone}

    />

    <MenuContainer />
  </div>



export default TexMexApp

// state = {
//   nameInput: undefined
// }

// alertName = () => alert( this.state.nameInput)

// handleNameInput = (event) => {
//   console.log(event.target.value)
//   this.setState({ nameInput: event.target.value})
// }
