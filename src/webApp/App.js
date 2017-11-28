import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import faker from 'faker'
import './index.css'
import NavigationBar from './Navigation'
import Jumbotron from './Jumbotron'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'
import Home from './Home'
import Products from './Products'
import Contact from './Contact'






const App = () =>
  <Router>

    <div>
      <NavigationBar />
      <Route exact path='/' component={Home} />
      <Route path='/about' render={() =>
        <div>
          <Section
            title={'About Us'}
            content={'this is what we do ...'}
            sectionStyle='about'
          />
        </div>}

      />
      <Route path='/services' render={() =>
        <div>
          <Section
            title={'Services'}
            content={'wanna know what we do?'}
            sectionStyle='services'
          >

            <div className='service-card-container'>
              <ServicesCard
                title='SEO'
                details='google love'
              />

              <ServicesCard
                title='Design'
                details='things look nice'
              />

              <ServicesCard
                title='Training'
                details='We show you how'
              />

              <ServicesCard
                title='Consulting'
                details='We tell you how'
              />
            </div>

          </Section>

        </div>}
      />
      <Route path='/products' component={Products} />
      <Route path='/contact' render={Contact} />
      <Route path='/products/:productName' component={Products} />


    </div>

  </Router>

export default App
