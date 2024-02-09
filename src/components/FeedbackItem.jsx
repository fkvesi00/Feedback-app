import React,{useContext} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedBackContext'

function FeedbackItem({item}) {
  const {handleDelete, editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color='purple' />
        </button>
        <button  className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}


FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired // You might want to add isRequired to make sure the prop is provided
};

export default FeedbackItem
