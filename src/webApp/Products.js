import React from 'react'
import ProductCard from './ProductCard'
import Section from './Section'
import {
  Link
} from 'react-router-dom'

const Products = () =>
  
  <div>
    <Section
      title={'Products'}
      content={'Look at all of the things we can sell you!'}
      sectionStyle='products'
    />
  </div>

export default Products
