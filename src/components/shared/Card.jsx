import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  /* return (
    <div className={`card ${reverse && 'reverse'}`}> //conditional class (za koristenje iz index.css)
      {children}
    </div>
  ) */

  return <div className='card' style={{ //consditional styling(za inline)
    backgroundColor: reverse? 'rgba(0,0,0,0.4)' : '#fff',
    color: reverse ? '$fff' : '#000'
  }}>
            {children}
         </div>
}

Card.defaultProps = {
    reverse : false,
}

Card.propTypes = {
    children : PropTypes.node.isRequired,
    reverse : PropTypes.bool
}

export default Card
