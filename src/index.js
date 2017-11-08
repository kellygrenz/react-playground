import React from 'react'
import ReactDOM from 'react-dom'
// import SmartApp from './smartApp/App'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import MonsterApp from './monsterMash/monsterApp'
// import data from './acmeApp/data'
// import MappingAndFiltering from './mappingAndFiltering/MappingAndFiltering'
import registerServiceWorker from './registerServiceWorker'
// import ChatterApp from './ChatterApp/ChatterApp'
// import RestaurantApp from './MexRestaurant/TexMexApp'
// import SearchApp from './searchApp/App'
import TexMexApp from './texMexSolution/App'

ReactDOM.render(<TexMexApp />, document.getElementById('root'))
registerServiceWorker()
