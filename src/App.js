import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'
import {v4 as uuidv4} from 'uuid'
import About from './components/pages/About'
import AboutIcon from './components/AboutIcon'

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
    <Router>
        <Header />
        <div className='container'>
          <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackFrom addFeedback={addFeedback}/>
              <FeedbackStats feedback={feedback}/>
              <FeedbackList 
              feedback={feedback}
              handleDelete={handleDelete}
              />
            </>
          }>
            </Route>
            <Route exact path='/about' element={<About/>}/>
            </Routes>
            <AboutIcon/>
        </div>
    </Router>
  )
}

export default App
