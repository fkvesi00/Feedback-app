import React from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
    const handleClick = (rating) => {
        console.log(rating)
    }

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button onClick={() => handleClick(item.rating)}>Click</button>
    </Card>
  )
}

FeedbackItem.defaultProps = {
  item : []
}

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired // You might want to add isRequired to make sure the prop is provided
};

export default FeedbackItem
