import React from 'react'
import ReactDOM from 'react-dom'
// import SmartApp from './smartApp/App'

// import App from './webApp/App'
// import App from './acmeApp/App'
// import MonsterApp from './monsterMash/monsterApp'
// import data from './acmeApp/data'
import MappingAndFiltering from './mappingAndFiltering/MappingAndFiltering'
import registerServiceWorker from './registerServiceWorker'
import ChatterApp from './ChatterApp/ChatterApp'

ReactDOM.render(<ChatterApp />, document.getElementById('root'))
registerServiceWorker()
