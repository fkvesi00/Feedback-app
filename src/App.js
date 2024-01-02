import React,{useState, useContext} from 'react'
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackFrom from './components/FeedbackFrom'
import About from './components/pages/About'
import AboutIcon from './components/AboutIcon'
import { FeedbackProvider } from './context/FeedBackContext'

const App = () => {

  return (
    <FeedbackProvider>
    <Router>
        <Header />
        <div className='container'>
          <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackFrom />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>
            </Route>
            <Route exact path='/about' element={<About/>}/>
            </Routes>
            <AboutIcon/>
        </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App
