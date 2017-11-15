import React, {Component} from 'react'
import GiftList from './GiftList'
import GiftForm from './GiftForm'

class ListContainer extends Component {
  state = {
    gifts: undefined,
    nameOfGift: undefined, 
    priceOfGift: undefined,
    budget: 600, 
    totalPriceOfGifts: undefined
  }

  componentDidMount () {
    const giftArray = [{name: 'Apple TV', price: 300}, {name: 'candy', price: 3}]
    this.setState({ gifts: giftArray})
  }

  handleNameOfGiftChange = (e) => {
    this.setState({nameOfGift: e.target.value})
  }

  handlePriceChange = (e) => {
    this.setState({priceOfGift: e.target.value})
  }

  addToList = (e) => {
    e.preventDefault()
    const newGift = { name: this.state.nameOfGift, price: this.state.priceOfGift}
    const newGiftList = this.state.gifts
    newGiftList.push(newGift)
    console.log(newGift.price, this.getTotalPrice(), this.state.budegt)
    let totalPrice = this.getTotalPrice()
    let giftPrice = Number(newGift.price)
    let budget = this.state.budget

    if (totalPrice + giftPrice > budget) {
      alert('nope! Total price is greater than your budget.')
      return
    } else {
      this.setState({ gifts: newGiftList })
      this.setState({nameOfGift: ''})
      this.setState({ priceOfGift: ''})
    }

  }


  getTotalPrice = () => {
    const list = this.state.gifts
    let totalPrice = 0

    for(let i = 0; i < list.length; i++) {
      totalPrice += Number(list[i].price)
    }
    return totalPrice
  }




  render () {
    return (
      <div>
        <h4>The List Container is Working!!</h4>
        <GiftForm 
          handleNameOfGiftChange={this.handleNameOfGiftChange}
          handlePriceChange={this.handlePriceChange}
          addToList={this.addToList}
          
        />
        {
          this.state.gifts
            ? <GiftList gifts={this.state.gifts} />
            : <h1>No Gifts Yet</h1>
        }
      </div>
    )
  }
}

export default ListContainer
