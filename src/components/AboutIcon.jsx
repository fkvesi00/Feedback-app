import React from 'react'
import { Link } from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'

function AboutIcon() {
  return (
    <div className='about-link'>
        <Link to='/about'>
            <FaQuestion  size={40}/>
        </Link>
    </div>
  )
}

export default AboutIcon
