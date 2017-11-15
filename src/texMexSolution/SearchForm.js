import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ mildSpiceLevel, searchTerm, resetMenuList, handleSearchTermChange, updateMenuList }) => {
  return (
    <div>

      <input onChange={handleSearchTermChange} />
      <button type='button' onClick={updateMenuList}>Search menu items</button>
      <button type='button' onClick={resetMenuList}> Reset</button>
      <button type='button' onClick={mildSpiceLevel}>Only Mild Items</button>
      
    </div>
  )
}

SearchForm.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  updateMenuList: PropTypes.func.isRequired,
  resetMenuList: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  mildSpiceLevel: PropTypes.func.isRequired

}

export default SearchForm
