import React, { useState } from 'react'
import BookEdit from './BookEdit'

function BookShow({book,onDelete,onEdit}) {

  const [showEdit,setEdit] = useState(false)

  const handleEdit =()=>{
    setEdit(!showEdit)
  }

  const handleSubmit=(id,title)=>{
    setEdit(false)
    onEdit(id,title)
  }
  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }
  const handleDelete =()=>{
    onDelete(book.id)
  }
  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
     <div> {content}</div>
      <div className="actions">
        <button className="edit" 
          onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" 
          onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow
