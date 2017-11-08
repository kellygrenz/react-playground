import React, {Component} from 'react'
import data from './DATA'
import './style.css'

const Name = ({name}) => {
  return (
    <div className='name'>
      <h1>{name}</h1>

    </div>
  )
}

const Address = ({street, suite, city, state}) => {
  return (
    <div>
      <h3>{street}</h3>
      <h3>{suite}</h3>
      <h3>{city}, {state}</h3>

    </div>
  )
}

class RestaurantApp extends Component {
  state = {
    items: undefined,
    searchTerm: undefined
  }

  componentDidMount () {
    this.setState({ items: data.items.name })
  }

  reset = () => {
    this.setState({ items: data.items.name, searchTerm: '' })
  }

  handleSearchTermChange = (e) => {
    let wordToSearch = e.target.value
    this.setState({ searchTerm: wordToSearch })
  }

  submitForm = (e) => {
    e.preventDefault()
    const items = this.state.items.name
    const searchTerm = this.state.searchTerm
   
    if (!searchTerm) {
      alert('you must enter a search term')
    } else {
      

      const matchedSentences = items.name.filter(item => {
        return item.split(' ').includes(searchTerm)
      })
      if (matchedSentences.length === 0) {
        this.setState({ sentences: ['no matched sentences'] })
      } else {
        this.setState({ sentences: matchedSentences })
      }
    
    }
  }

  render () {
    return (

      <div>
        <div className='info'>
          
          <Name
            name={data.company[0].title}
          />
          

          <Address
            street={data.address.street}
            suite={data.address.suite}
            city={data.address.city}
            state={data.address.state}

          />
        </div>

        <div className='menu-items'>
          <ul>
            {
              data.items.map(item => {
                return (
                  <div>
                <li>{item.name} ${item.price} heat level: {item.spiceLevel}</li>
                
                </div>
                )
              })
            }
          </ul>
        </div>

        <div>
        <form onSubmit={this.submitForm}>
          <h2>Item Search</h2>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type='text'
            placeholder='Search' />
          <button type='submit'>search</button>
        </form>
        <ul>
          {
            this.state.items
              ? this.state.sentences.map((sentence, index) => {
                return <li key={index}>{sentence}</li>
              })
              : <p>Loading Item</p>

          }

        </ul>

        <button type='button' onClick={this.reset}>Reset</button>

      </div>



      </div>
    )
  }
}

export default RestaurantApp
