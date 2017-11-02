import React, {Component} from 'react'

const Counter = ({count, sayHello, decreaseCount, increaseCount}) => {
  return (

    <div>
      <p> Count: {count} </p>
      <button onClick={sayHello}> Say Hi </button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}

class SmartApp extends Component {
  state = {
    count: 10
  }
  sayHello = () => {
    alert('Thanks for clicking the button')
  }
  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count -= 1 })
    } else {
      alert('can not set count below 0')
    }
  }

  increaseCount = () => {
    this.setState({ count: this.state.count += 1 })
  }

  handleCountInputchange = (event) => {
    console.log('you entered:', event.target.value)
    const updatedCount = Number(event.target.value)
    this.setState({ count: updatedCount})
  }

  render () {
    return (
      <div>
        <div>
          <h3>Enter a number to begin</h3>

          <input
            onChange={this.handleCountInputchange}
            type='Number'
            placeholder='please enter number to begin' />
        </div>
        <div>
          <Counter 
            count={this.state.count}
            sayHello={this.sayHello}
            increaseCount={this.increaseCount}
            decreaseCount={this.decreaseCount} 
          />
        </div>
      </div>
    )
  }
}

export default SmartApp
