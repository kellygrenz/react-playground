import React from 'react'
import Header from './Header'
import ToDoContainer from './ToDoContainer'

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <ToDoContainer />

    </div>
  )
}

export default App
