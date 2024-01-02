import React,{useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'
import {v4 as uuidv4} from 'uuid'

const App = () => {
  const [feedback, setfeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you wont to delete')){
      setfeedback(feedback.filter(feedback => feedback.id !== id))
    }
  }

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4()

    setfeedback([newFeedback,...feedback])
  }

  return (
    <>
        <Header />
        <div className='container'>
            <FeedbackFrom addFeedback={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList 
            feedback={feedback}
            handleDelete={handleDelete}
            />
        </div>
    </>
  )
}

export default App
