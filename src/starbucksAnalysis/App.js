import React from 'react'
import Data from './Data'
import DrinkList from './DrinkList'

const App = () => {
  const classicEspresso = Data.filter(item => {
    return item.category === 'Classic Espresso Drinks'
  })
  // console.log(classicEspresso)

  const singleEspresso = Data.filter(item => {
    return item.category === 'Signature Espresso Drinks'
  })

  const nonMilk = Data.filter(item => {
    let itemArray = item.beveragePrep.split(' ')
    return itemArray[itemArray.length -1] !== 'Milk'
  })
  return (
    <div>
      {/* <h1>Classic Espresso Drinks</h1>
      <DrinkList
        data={classicEspresso}
      />
      <h1>Single Espresso Drinks</h1>
      <DrinkList 
        data={singleEspresso}
      /> 
      
      */
      
      <DrinkList 
      data={nonMilk}
      />
      
      }



    </div>
  )
}



export default App
