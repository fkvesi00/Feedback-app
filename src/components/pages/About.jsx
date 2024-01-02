import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'


function About() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is React app to leave feedback for a product or service</p>
            <p>Vaersion: 1.0.0</p>


            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </div>
        
    </Card>
  )
}

export default About
