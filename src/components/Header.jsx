import React from 'react'
import PropTypes from 'prop-types'

function Header({naslov, bgColor, textColor}) {
  const headerStyles = {
    backgroundColor: bgColor,  
    color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h2>{naslov}</h2>
      </div>    
    </header>
  )
}

Header.defaultProps ={
  naslov: 'Feedback UI',      
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  naslov: PropTypes.string,    
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default Header