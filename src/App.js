import React,{useState} from 'react'
import Header from './components/Header'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'

const App = () => {
  const [feedback, setfeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if(window.confirm('Are you sure you wont to delete')){
      setfeedback(feedback.filter(feedback => feedback.id !== id))
    }
  }

  return (
    <>
        <Header />
        <div className='container'>
            <FeedbackFrom />
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
