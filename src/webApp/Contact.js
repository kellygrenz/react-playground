import React from 'react'
import Section from './Section'
import {
  Link
} from 'react-router-dom'

const styles = {
  formContainer: {
    background: '#FABE58',
    padding: 40,
    display: 'flex',
    justifyContent: 'center',
    
  },

  field: {
    paddingTop: 15,
    paddingRight: 25, 
    paddingLeft: 25,
    paddingBottom: 15,
    borderRadius: 3,
    marginRight: 20,
    width: '50%'
    

  },

  textArea: {
    width: '100vw',
    height: '150px',
    paddingTop: 15,
    paddingRight: 25, 
    paddingLeft: 25,
    paddingBottom: 15,
    borderRadius: 3,
    width: '100%'


  },

  h3: {
    fontFamily: 'Oswald',
    fontSize: '30px',
    color: '#fff'
  }
}

const Contact = () =>
  <div>
    <Section
      title={'Contact Us'}
      content={'Get In Touch'}
      sectionStyle='products'
    />

    <form style={styles.formContainer}>
      <input placeholder='Name' type='text' style={styles.field}/>
      <input placeholder='email' type='text' style={styles.field}/>
      

    </form>
  </div>

export default Contact
