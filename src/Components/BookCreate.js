import React, { useState } from 'react'

function BookCreate({onCreate}) {
    const [title,setTitle] = useState('')

    const handleChange=(event)=>{
       
        setTitle(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        onCreate(title)
        setTitle('')
    }
  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
      <form onSubmit={handleSubmit} >
        <label htmlFor="">Title</label>
        <input className='input' type="text" name="" id="" value={title} onChange={handleChange} />
        <button className='button'>Create !</button>
      </form>
    </div>
  )
}

export default BookCreate