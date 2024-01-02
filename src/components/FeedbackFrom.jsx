import React,{useState,useContext} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedBackContext'

function FeedbackFrom() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [msg, setMsg] = useState('')
    const [rating, setRating] = useState(10)
    
    const {addFeedback} = useContext(FeedbackContext)

    const handleInputChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMsg(null)
        }else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMsg('Text must be at least 10 characters')
        }else{
            setMsg(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)

    } 
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            addFeedback(newFeedback)

            setText('')
        }
    }
     

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>{'How would you rate your service with us'}</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                <input type="text" 
                placeholder='Write a review' 
                onChange={handleInputChange}
                value={text}
                />
                <Button type="submit" version={'secondary'} isDisabled={btnDisabled}>Send</Button>
            </div>
            {msg && <div className='message'>{msg}</div>}
        </form>
    </Card>
  )
}

export default FeedbackFrom
