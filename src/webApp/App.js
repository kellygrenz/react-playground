import React from 'react'
import faker from 'faker'
import './index.css'
import NavigationBar from './Navigation'
import Jumbotron from './Jumbotron'
import Section from './Section'
import ServicesCard from './ServicesCard'
import ProductCard from './ProductCard'


const App = () => {
  return (
    <div>
      <NavigationBar />
      <Jumbotron
        title={faker.name.title()}
        desc={faker.lorem.sentence()}
      />

      <Section
        title={'About Us'}
        content={'this is the new content ...'}
        sectionStyle='about'
      />
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

      <Section
        sectionStyle='products'
        title={'Products'}
        content={'Best selling products'}
      >
        <div className='product-card-container'>
          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />

          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />

          <ProductCard
            product={faker.commerce.product()}
            price={faker.commerce.price()}
            img={faker.random.image()}
          />
        </div>

      </Section>

      <Section
        title={'Products'}
        content={'Look at all of the things we can sell you!'}
        sectionStyle='products'
      />



    </div>
  )
}

export default App
