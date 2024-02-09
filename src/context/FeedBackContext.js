import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setfeedback] = useState([])
    

    useEffect(()=>{
       fetchFeedback()
    },[])

    const fetchFeedback = async() => {
        const response = await fetch('/feedback')

        const data = await response.json()
        setfeedback(data)
        setIsLoading(false)
    }
    
    //uredeni komentar
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    //brisanje komentara
    const handleDelete = async(id) => {
        if(window.confirm('Are you sure you wont to delete')){
            await fetch(`/feedback/${id}`, {method:'DELETE'})

            setfeedback(feedback.filter(feedback => feedback.id !== id)) 
          }
      }
    
      //dodavanje komentara
      const addFeedback =async (newFeedback) => {
        const response = await fetch('/feedback', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'

            },
            body: JSON.stringify(newFeedback)
        })

        const feedbackData = response.json()
    
        setfeedback([feedbackData,...feedback])
      }
    
      //uredivanje komentara
      const editFeedback = item =>{
        setFeedbackEdit({
            item,
            edit:true
        })

        console.log(feedbackEdit)
      }

      //postavljanje uredenog komentara unutar ostalih komentara
      const updateFeedback =async (id, updItem) => {
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify(updItem)
        })

        const data = await response.json()

       setfeedback(feedback.map(feedback=>{
        return feedback.id === id ? {...feedback, ...data} : feedback
       }))
      }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        handleDelete,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext