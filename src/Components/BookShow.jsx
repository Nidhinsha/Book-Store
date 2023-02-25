import React, { useContext, useState } from 'react'
import BooksContext from '../context/books'
import BookEdit from './BookEdit'

function BookShow({book}) {

  const [showEdit,setEdit] = useState(false)

  const { deleteBookById } = useContext(BooksContext)

  const handleEdit =()=>{
    setEdit(!showEdit)
  }

  const handleSubmit=()=>{
    setEdit(false)
    
  }
  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />
  }
  const handleDelete =()=>{
    deleteBookById(book.id)
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
