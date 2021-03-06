import React, {Component} from 'react'
import data from '../MexRestaurant/DATA'
import MenuList from './Menu'
import SearchForm from './SearchForm'



class MenuContainer extends Component {
  state = {
    menuItems: undefined,
    searchTerm: undefined

  }

  componentDidMount () {
    this.setState({menuItems: data.items})
  }

  handleSearchTermChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  resetMenuList = () => {
    this.setState({ menuItems: data.items, searchTerm: '' })
  }

  mildSpiceLevel = () => {
    const mildFoods = this.state.menuItems.filter(item => {
      return item.spiceLevel < 4
    })
    this.setState({ menuItems: mildFoods })
  }


  updateMenuList = (e) => {
    alert('you are refreshing the page!')
    e.preventDefault()
    const updatedMenuItems = this.state.menuItems.filter(item => {
      const searchTerm = this.state.searchTerm.toLowerCase()
      const menuItem = item.name.toLowerCase()
      return menuItem.includes(searchTerm)
    })
    console.log(updatedMenuItems)
    this.setState({ menuItems: updatedMenuItems })
  }

  render () {
    return (
      <div>
        <SearchForm
          handleSearchTermChange={this.handleSearchTermChange}
          updateMenuList={this.updateMenuList}
          resetMenuList={this.resetMenuList}
          searchTerm={this.state.searchTerm}
          mildSpiceLevel={this.mildSpiceLevel}
        />
        {
          this.state.menuItems
            ? <MenuList foodItems={this.state.menuItems} />
            : <h3>You don't have menu items</h3>
        }
      </div>

    )
  }
}

export default MenuContainer
