import React,{useState} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'


function FeedbackFrom() {
    const [text, setText] = useState('')

    const handleInputChange = (e) => setText(e.target.value) 

  return (
    <Card>
        <form>
            <h2>{'How would you rate your service with us'}</h2>
            {/*@todo - rating select component */}
            <div className="input-group">
                <input type="text" 
                placeholder='Write a review' 
                onChange={handleInputChange}
                value={text}
                />
                <Button type="submit" version={'secondary'}>Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackFrom
