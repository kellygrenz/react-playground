import React, {Component} from 'react'
import Header from './Header'
import ListContainer from './ListContainer'

const bodyStyle = {
  container: {
    backgroundColor: '#22313f',
    paddingTop: '75px',
    alignItems: 'center',
    flexDirection: 'colunm',
    justifyContent: 'space-around',
    width: '100%'

    
  }



}

const App = () =>
  <div style={bodyStyle.container}>
    <Header />
    <ListContainer />
  </div>

  export default App