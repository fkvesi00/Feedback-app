import React,{useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,  AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedBackContext'

function FeedbackList() {
  const {feedback, handleDelete} = useContext(FeedbackContext)
  
  if(!feedback || feedback.length === 0){
    return <p>No feedback yet</p>
  }


  
  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => {
         return(
          <motion.div
            key={item.id}
            initial={{opacity:0}}
            animate= {{opacity:1}}
            exit={{opacity:0}}
          >
             <FeedbackItem 
           key={item.id} 
           item={item} 
           />
          </motion.div>
         )
         
        })}
      </AnimatePresence>
        
    </div>
  )
}




export default FeedbackList
