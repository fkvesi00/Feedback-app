import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setfeedback] = useState([
        {
            id:1,
            text:'This item is feedback item 1',
            rating: 10
        },
        {
            id:2,
            text:'This item is feedback item 2',
            rating: 7
        },
        {
            id:3,
            text:'This item is feedback item 3',
            rating: 6
        }
    ])

    const handleDelete = (id) => {
        if(window.confirm('Are you sure you wont to delete')){
          setfeedback(feedback.filter(feedback => feedback.id !== id))
          
        }
      }
    
      const addFeedback = newFeedback => {
        newFeedback.id = uuidv4()
    
        setfeedback([newFeedback,...feedback])
      }
    

    return <FeedbackContext.Provider value={{
        feedback,
        handleDelete,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext